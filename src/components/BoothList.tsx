import React, { useState } from 'react';
import { BOOTH_DATA, ALL_TAGS, Booth } from '../data/boothData';
import { Search, Twitter, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

export default function BoothList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<'id' | 'name'>('id');
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedBoothId, setExpandedBoothId] = useState<string | null>(null);

    const ITEMS_PER_PAGE = 12;

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
        setCurrentPage(1); // Reset page on filter
    }

    const filteredBooths = BOOTH_DATA.filter(booth => {
        const matchSearch = booth.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            booth.members.some(m => m.nickname.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchTags = selectedTags.length === 0 || selectedTags.every(tag => booth.tags.includes(tag));
        
        return matchSearch && matchTags;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return a.id.localeCompare(b.id);
    });

    const totalPages = Math.ceil(filteredBooths.length / ITEMS_PER_PAGE);
    const paginatedBooths = filteredBooths.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const toggleAccordion = (id: string) => {
        setExpandedBoothId(prev => (prev === id ? null : id));
    };

    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Toolbar Area */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                        type="text" 
                        placeholder="부스명 또는 닉네임 검색..." 
                        className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-slate-200 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold text-sm transition-all"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>

                {/* Sort */}
                <div className="flex w-full md:w-auto items-center gap-3 justify-between md:justify-end">
                    <span className="text-xs text-slate-400 font-medium whitespace-nowrap">총 {filteredBooths.length}개의 부스</span>
                    <select 
                        className="text-sm px-4 py-2 bg-white rounded-full border border-slate-200 focus:outline-none focus:border-accent-gold appearance-none cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'id' | 'name')}
                    >
                        <option value="id">부스 위치순</option>
                        <option value="name">가나다순</option>
                    </select>
                </div>
            </div>

            {/* Tags Cloud Area */}
            <div className="flex flex-wrap gap-2 px-2">
                {ALL_TAGS.map(tag => (
                    <button 
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 transform active:scale-95 ${
                            selectedTags.includes(tag) 
                            ? 'bg-accent-gold text-white border-accent-gold font-bold shadow-md shadow-accent-gold/20' 
                            : 'bg-white text-slate-500 border-slate-200 hover:border-accent-gold/40 hover:text-accent-gold'
                        }`}
                    >
                        # {tag}
                    </button>
                ))}
            </div>

            {/* Grid Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedBooths.map(booth => (
                    <div 
                        key={booth.id} 
                        className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-lg hover:border-accent-gold/30 transition-all duration-300 group flex flex-col"
                    >
                        {/* 썸네일 */}
                        <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                            <img 
                                src={booth.imageUrl} 
                                alt={booth.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* 그라데이션 오버레이 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* 부스 위치 뱃지 */}
                            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-accent-gold shadow-sm flex items-center gap-1.5 border border-white/20">
                                <MapPin className="w-3 h-3" />
                                {booth.id}
                            </div>
                        </div>

                        {/* 부스 정보 */}
                        <div className="p-5 flex flex-col flex-1 gap-4">
                            {/* 헤더 & 태그 */}
                            <div className="flex flex-col gap-2.5">
                                <h4 className="text-[15px] font-bold text-slate-800 leading-snug line-clamp-2">
                                    {booth.name}
                                </h4>
                                <div className="flex gap-1.5 flex-wrap">
                                    {booth.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded text-accent-gold bg-accent-gold/10 font-bold border border-accent-gold/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 참가자 목록 */}
                            <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto pt-2">
                                {booth.members.map(member => (
                                    <div key={member.nickname} className="flex items-center gap-1.5">
                                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                                            <span className="text-[8px] font-bold text-slate-500">{member.nickname.charAt(0)}</span>
                                        </div>
                                        <span className="text-xs font-medium text-slate-600">{member.nickname}</span>
                                        {member.twitter && (
                                            <a 
                                                href={`https://twitter.com/${member.twitter}`} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="text-slate-300 hover:text-[#1DA1F2] transition-colors"
                                                title={`${member.nickname}의 Twitter`}
                                            >
                                                <Twitter className="w-3.5 h-3.5 fill-current" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* 소개 아코디언 */}
                            <div className="border-t border-slate-100/80 pt-3">
                                <button 
                                    className="flex w-full items-center justify-between text-slate-400 hover:text-accent-gold transition-colors font-bold text-[12px] group/btn"
                                    onClick={() => toggleAccordion(booth.id)}
                                >
                                    <span className="flex items-center gap-1">
                                        부스 소개
                                        <span className={`w-1.5 h-1.5 rounded-full bg-accent-gold transition-opacity ${expandedBoothId === booth.id ? 'opacity-100' : 'opacity-0'}`} />
                                    </span>
                                    {expandedBoothId === booth.id ? 
                                        <ChevronUp className="w-4 h-4" /> : 
                                        <ChevronDown className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    }
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        expandedBoothId === booth.id ? 'max-h-40 opacity-100 mt-3 border-l-2 border-accent-gold pl-3 py-1' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-slate-600 text-xs leading-relaxed break-keep">
                                        {booth.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Empty State */}
            {paginatedBooths.length === 0 && (
                <div className="py-24 flex flex-col items-center justify-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-2">
                        <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-700">검색 결과가 없습니다</h3>
                    <p className="text-xs text-slate-400">다른 검색어나 태그를 선택해 보세요.</p>
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 text-slate-400 hover:text-accent-gold disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                    >
                        <ChevronDown className="w-4 h-4 rotate-90" />
                    </button>
                    
                    <div className="flex gap-1.5">
                        {Array.from({ length: totalPages }).map((_, i) => {
                            const pageNum = i + 1;
                            // Show limited pages (ellipsis logic can be added if totalPages > 10, but 60/12=5 pages, so it's fine)
                            return (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${
                                        currentPage === pageNum 
                                        ? 'bg-accent-gold text-white shadow-md shadow-accent-gold/20 scale-110' 
                                        : 'bg-transparent text-slate-500 hover:bg-slate-100'
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>

                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 text-slate-400 hover:text-accent-gold disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                    >
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                </div>
            )}
        </div>
    );
}