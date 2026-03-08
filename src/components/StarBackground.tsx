import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let bubbles: Bubble[] = [];

    const COLORS = ['#F884A1', '#FCBC5C', '#8CFE4B', '#62F7D2', '#5B7BFE', '#FFB3E9', '#B377FF'];
    const BUBBLE_COLORS = ['#ffd6f1', '#BAE6FD', '#FEF08A'];

    function draw4PointedStar(x: number, y: number, size: number, rotation: number, color: string) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(0, 0, size, 0);
      ctx.quadraticCurveTo(0, 0, 0, size);
      ctx.quadraticCurveTo(0, 0, -size, 0);
      ctx.quadraticCurveTo(0, 0, 0, -size);
      ctx.fill();
      ctx.restore();
    }

    class Bubble {
      x!: number;
      y!: number;
      size!: number;
      color!: string;
      opacity!: number;
      blink!: number;
      vx!: number;
      vy!: number;
      state!: 'appearing' | 'holding' | 'disappearing';
      holdTimer!: number;
      maxHold!: number;

      constructor() { this.reset(true); }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        const sizeType = Math.floor(Math.random() * 2);
        if (sizeType === 0) {
          this.size = Math.random() * 20 + 35;
        } else {
          this.size = Math.random() * 25 + 60;
        }

        this.color = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
        this.blink = 0.006 + Math.random() * 0.006;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.holdTimer = 0;
        this.maxHold = 180 + Math.random() * 180;

        if (initial) {
          const startChance = Math.random();
          if (startChance < 0.3) {
            this.state = 'appearing';
            this.opacity = Math.random() * 0.4;
          } else if (startChance < 0.6) {
            this.state = 'holding';
            this.opacity = 0.4;
            this.holdTimer = Math.random() * this.maxHold;
          } else {
            this.state = 'disappearing';
            this.opacity = Math.random() * 0.4;
            this.blink = -Math.abs(this.blink);
          }
        } else {
          this.state = 'appearing';
          this.opacity = 0;
          this.blink = Math.abs(this.blink);
        }
      }

      draw() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.state === 'appearing') {
          this.opacity += this.blink;
          if (this.opacity >= 0.4) {
            this.opacity = 0.4;
            this.state = 'holding';
          }
        } else if (this.state === 'holding') {
          this.holdTimer++;
          if (this.holdTimer >= this.maxHold) {
            this.state = 'disappearing';
            this.blink = -Math.abs(this.blink);
          }
        } else if (this.state === 'disappearing') {
          this.opacity += this.blink;
          if (this.opacity <= 0) {
            this.opacity = 0;
            this.reset();
          }
        }

        if (!ctx) return;

        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        grad.addColorStop(0, `${this.color}00`);
        grad.addColorStop(0.5, `${this.color}20`);
        grad.addColorStop(0.8, `${this.color}80`);
        grad.addColorStop(1, `${this.color}00`);

        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }
    }

    class Star {
      x!: number;
      y!: number;
      size!: number;
      color!: string;
      opacity!: number;
      blink!: number;
      rotation!: number;
      rotSpeed!: number;

      constructor() { this.reset(); }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
        this.blink = 0.003 + Math.random() * 0.008;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
      }

      draw() {
        this.opacity += this.blink;
        if (this.opacity > 0.8 || this.opacity < 0.1) this.blink *= -1;
        this.rotation += this.rotSpeed;

        if (!ctx) return;
        ctx.globalAlpha = Math.max(0, this.opacity);
        draw4PointedStar(this.x, this.y, this.size, this.rotation, this.color);
      }
    }

    class ShootingStar {
      x!: number;
      y!: number;
      len!: number;
      speed!: number;
      opacity!: number;
      color!: string;

      constructor() { this.reset(); }

      reset() {
        this.x = Math.random() * width + 200;
        this.y = Math.random() * height * 0.2 - 200;
        this.len = Math.random() * 80 + 120;
        this.speed = Math.random() * 1.5 + 4;
        this.opacity = 1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }

      draw() {
        if (!ctx) return false;
        const grad = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y - this.len);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(this.x + 2, this.y + 2);
        ctx.lineTo(this.x - 2, this.y - 2);
        ctx.lineTo(this.x + this.len, this.y - this.len);
        ctx.closePath();
        ctx.fill();

        draw4PointedStar(this.x, this.y, 6, this.x * 0.02, this.color);
        ctx.restore();

        this.x -= this.speed;
        this.y += this.speed;
        this.opacity -= 0.004;

        return this.opacity > 0;
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      stars = Array.from({ length: 55 }, () => new Star());
      bubbles = Array.from({ length: 3 }, () => new Bubble());
    };

    const spawn = () => {
      if (shootingStars.length < 2) shootingStars.push(new ShootingStar());
      setTimeout(spawn, Math.random() * 4000 + 2000);
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach(b => b.draw());
      stars.forEach(s => s.draw());
      shootingStars = shootingStars.filter(ss => ss.draw());

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    spawn();
    animate();

    return () => {
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default StarBackground;