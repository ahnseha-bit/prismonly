import React from 'react';
import { motion } from "motion/react";

interface BoardProps {
  title?: string;
  children: React.ReactNode;
  footer?: string;
}

export default function Board({ title, children, footer }: BoardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      /* notice-container style: responsive max width, center aligned */
      className="w-full max-w-3xl mx-auto flex flex-col items-center"
    >
      <div className="shadow-frame w-full">
        <div className="outer-holo-line w-full">
          <div className="white-spacer bg-white p-[2px] w-full">
            <div className="inner-holo-line w-full">
              <div className="main-board w-full">
                {title && <h1 className="title-text">{title}</h1>}
                <div className="content-text text-left w-full">
                  {children}
                </div>
                {footer && (
                  <>
                    <div className="line-accent"></div>
                    <div className="footer-text mt-8 text-center">{footer}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
