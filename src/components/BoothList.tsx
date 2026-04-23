import React, { useState, useMemo, useEffect, useRef } from "react";
import { Search, ChevronLeft, ChevronRight, X, ArrowUpDown, Star, ChevronDown, Twitter } from "lucide-react";
import { BOOTH_DATA, Booth } from "../data/boothData";

type SortOption = "id" | "location" | "name";

interface BoothCardProps {
    booth: Booth;
    isBookmarked: boolean;
    toggleBookmark: (id: string | number) => void;
    key?: React.Key;
}

const BoothCard: React.FC<BoothCardProps> = ({ booth, isBookmarked, toggleBookmark }) => {
    const showLocation = !booth.location.startsWith("N00");

    return (
        <div className="w-full bg-white border border-accent-gold/60 p-4 md:p-5 rounded-lg shadow-sm mb-4 flex flex-col">
            {/* 1층 / 상단 레이어: (부스위치) 부스명 */}
            <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-800 flex flex-wrap items-center gap-x-1.5 w-full whitespace-normal break-keep">
                    {showLocation && (
                        <span className="text-accent-gold shrink-0">[{booth.location}]</span>
                    )}
                    <span>{booth.name}</span>
                </h3>
            </div>

            {/* 하단 레이어: PC 가로 배치, 모바일 세로 배치 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1">
                {/* 2층 / 좌측: 부스 이미지 */}
                <div className="w-full md:w-[300px] shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-100/50 relative aspect-[4/3]">
                    <img
                        src={`/img/booth/${booth.id}.png`}
                        alt={booth.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/img/booth/000.png";
                        }}
                    />
                </div>

                {/* 우측 정보 영역 (모바일 3,4,5층) */}
                <div className="flex flex-col flex-1 min-w-0">
                    {/* 3층 / 상단: 키워드 */}
                    {(booth.keywords || booth.isAdult) && (
                        <div className="mb-2.5 text-[13px] md:text-[14px] font-medium text-accent-gold">
                            {booth.isAdult && (
                                <span className="bg-red-500 text-white px-1.5 py-[2px] rounded-sm text-[10px] md:text-xs font-bold mr-1.5 leading-none">A</span>
                            )}
                            <span className="font-bold">{booth.keywords}</span>
                        </div>
                    )}

                    {/* 4층 / 중단: 부스 설명 */}
                    <div className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed whitespace-pre-wrap">
                        {booth.description}
                    </div>

                    {/* 5층 / 하단 끝: 참가자 목록 & 북마크 */}
                    <div className="mt-auto pt-6 w-full flex justify-between items-center">
                        <div className="flex flex-wrap items-center gap-2">
                            {booth.members.map((member, idx) => {
                                const className = "bg-accent-gold text-white px-2.5 py-1 rounded-[2px] text-[11px] md:text-xs font-bold font-sans inline-flex items-center gap-1";
                                return member.twitter ? (
                                    <a
                                        key={idx}
                                        href={`https://twitter.com/${member.twitter}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`${className} hover:opacity-90 transition-opacity`}
                                    >
                                        <Twitter className="w-3.5 h-3.5 text-white shrink-0" fill="currentColor" />
                                        {member.nickname}
                                    </a>
                                ) : (
                                    <div key={idx} className={className}>
                                        {member.nickname}
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => (booth.id)}
                            className="ml-2 flex-shrink-0 transition-transform hover:scale-110 active:scale-95 relative z-10"
                            title={isBookmarked ? "북마크 해제" : "북마크 추가"}
                        >
                            <Star className={`w-6 h-6 transition-colors ${isBookmarked ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function BoothList() {
    const listRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState<SortOption>("id");
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedIds, setBookmarkedIds] = useState<Set<string | number>>(new Set());
    const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
    const itemsPerPage = 12;

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        
        if (listRef.current) {
            const top = listRef.current.getBoundingClientRect().top + window.scrollY - 100; // 상단 여백 100px 확보
            window.scrollTo({ top, behavior: "smooth" });
        }
    }, [currentPage]);
    
    useEffect(() => {
    try {
        const saved = localStorage.getItem('prism_bookmarks');
        if (saved) setBookmarkedIds(new Set(JSON.parse(saved)));
    } catch {}
}, []);
    
const toggleBookmark = (id: string | number) => {
    setBookmarkedIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        try {
            localStorage.setItem('prism_bookmarks', JSON.stringify(Array.from(next)));
        } catch {}
        return next;
    });
};

    const filteredAndSortedBooths = useMemo(() => {
        let result = BOOTH_DATA.filter((booth) => {
            if (showOnlyBookmarked && !bookmarkedIds.has(booth.id)) return false;
            const term = searchTerm.toLowerCase();
            return (
                booth.name.toLowerCase().includes(term) ||
                booth.location.toLowerCase().includes(term) ||
                (booth.keywords && booth.keywords.toLowerCase().includes(term)) ||
                (booth.description && booth.description.toLowerCase().includes(term)) ||
                booth.members.some(member => member.nickname.toLowerCase().includes(term))
            );
        });

        result = result.sort((a, b) => {
            if (sortOption === "location") {
                return a.location.localeCompare(b.location, undefined, { numeric: true });
            } else if (sortOption === "name") {
                return a.name.localeCompare(b.name);
            } else {
                return Number(a.id) - Number(b.id);
            }
        });

        return result;
    }, [searchTerm, sortOption, bookmarkedIds, showOnlyBookmarked]);

    const totalPages = Math.ceil(filteredAndSortedBooths.length / itemsPerPage);
    const currentBooths = filteredAndSortedBooths.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col gap-6 font-sans" ref={listRef}>
            <div className="flex flex-col md:flex-row gap-3 justify-between items-center bg-white p-4 rounded-xl border border-accent-gold/20 shadow-sm shadow-[rgba(202,154,80,0.1)]">
                <div className="relative w-full md:w-[350px] flex-shrink-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="부스명, 닉네임, 키워드 등 검색"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full pl-9 pr-8 py-2.5 border border-slate-200 rounded-lg focus:outline-none text-sm"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => { setSearchTerm(''); setCurrentPage(1); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            title="검색어 초기화"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button
                        onClick={() => { setShowOnlyBookmarked(!showOnlyBookmarked); setCurrentPage(1); }}
                        className={`flex items-center justify-center p-2.5 rounded-lg border transition-transform hover:scale-105 active:scale-95 ${showOnlyBookmarked
                            ? 'bg-yellow-50 border-yellow-200 text-yellow-500 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100'
                            }`}
                        title="북마크 부스 모아보기"
                    >
                        <Star className={`w-5 h-5 ${showOnlyBookmarked ? 'fill-yellow-400 text-yellow-400' : 'text-slate-400'}`} />
                    </button>

                    <div className="relative w-full sm:w-auto">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ArrowUpDown className="w-4 h-4 text-accent-gold" />
                        </div>
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="w-full sm:w-auto appearance-none bg-white text-slate-700 text-sm font-medium pl-9 pr-9 py-2.5 rounded-lg border border-accent-gold/40 shadow-sm focus:outline-none cursor-pointer"
                        >
                            <option value="id" className="bg-white text-slate-700">등록순</option>
                            <option value="location" className="bg-white text-slate-700">부스 위치순</option>
                            <option value="name" className="bg-white text-slate-700">가나다순</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                {showOnlyBookmarked && (
                    <div className="text-[12px] text-slate-400 mb-4 text-center leading-relaxed">
                        ※ 북마크 정보는 브라우저에 저장되므로, <br className="md:hidden" />
                        쿠키나 캐시 등 방문 기록을 삭제하면 초기화될 수 있습니다.
                    </div>
                )}
                {currentBooths.length === 0 ? (
                    <div className="text-center py-16 text-slate-500 bg-white rounded-xl border border-dashed border-accent-gold/30 gold-gradient-text text-lg">
                        검색 결과가 없습니다.
                    </div>
                ) : (
                    currentBooths.map((booth) => (
                        <BoothCard
                            key={booth.id}
                            booth={booth}
                            isBookmarked={bookmarkedIds.has(booth.id)}
                            toggleBookmark={toggleBookmark}
                        />
                    ))
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4 mb-12">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-full disabled:opacity-50 hover:bg-slate-100 transition-colors text-slate-500"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-1.5 items-center overflow-x-auto max-w-[calc(100vw-6rem)] px-1">
                        {Array.from({ length: totalPages }).map((_, idx) => {
                            if (
                                totalPages > 5 &&
                                idx !== 0 &&
                                idx !== totalPages - 1 &&
                                Math.abs(currentPage - 1 - idx) > 1
                            ) {
                                if (idx === 1 || idx === totalPages - 2) {
                                    return <span key={idx} className="w-8 h-8 flex items-center justify-center text-slate-400 font-medium tracking-widest shrink-0">...</span>;
                                }
                                return null;
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentPage(idx + 1)}
                                    className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-full text-sm font-semibold transition-all duration-200 ${currentPage === idx + 1
                                        ? "bg-accent-gold/10 text-accent-gold"
                                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-full disabled:opacity-50 hover:bg-slate-100 transition-colors text-slate-500"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
