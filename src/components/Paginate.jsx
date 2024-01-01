import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Paginate({className, page, totalPages, fetchPreviousData, fetchNextData, isSearch}) {
  return (
    <div className={className}>
      <div className="space-x-2 flex">
        {
          page > 1 ? 
          (
            <Button variant="outline" size="sm" className="space-x-1 " onClick={() => fetchPreviousData()}>
              <ChevronLeft className="w-4 h-4"/>
              <span>Previous</span>
            </Button>
          ) :
          (
            <Button variant="outline" disabled size="sm" className="space-x-1 " onClick={() => fetchPreviousData()}>
              <ChevronLeft className="w-4 h-4"/>
              <span>Previous</span>
            </Button>
          )
        }
        {
          page < totalPages ?
          (
            <Button variant="outline" size="sm" className="space-x-1" onClick={() => fetchNextData()}>
              <span>Next</span> <ChevronRight className="w-4 h-4"/>
            </Button>
          ) :
          (
            <Button variant="outline" disabled size="sm" className="space-x-1" onClick={() => fetchNextData()}>
              <span>Next</span> <ChevronRight className="w-4 h-4 "/>
            </Button>
          )
        }
      </div>
    </div>
  );
}
