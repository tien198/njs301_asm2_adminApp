import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PaginationInfor() {
    return (
        <div className="mt-32 flex items-center justify-end space-x-2 text-sm text-gray-600">
            <span>1–8 of 8</span>

            {/* Nút back (disabled) */}
            <FiChevronLeft className="w-4 h-4 text-gray-400 cursor-not-allowed" />

            {/* Nút next (disabled) */}
            <FiChevronRight className="w-4 h-4 text-gray-400 cursor-not-allowed" />
        </div>
    );
}