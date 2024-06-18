import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/Pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
export const PaginationView = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  const getPaginationItems = () => {
    const pages = [];
    const showEllipsis = (idx: number) => (
      <PaginationItem key={`ellipsis-${idx}`}>
        <PaginationEllipsis />
      </PaginationItem>
    );

    pages.push(
      <PaginationItem key={1}>
        <PaginationLink
          href='#'
          isActive={currentPage === 1}
          onClick={() => onPageChange(1)}
          className={`${currentPage === 1 ? 'bg-muted-foreground text-black' : ''}`}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (currentPage > 3) {
      pages.push(showEllipsis(1));
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href='#'
            isActive={currentPage === i}
            onClick={() => onPageChange(i)}
            className={`${currentPage === i ? 'bg-muted-foreground text-black' : ''}`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(showEllipsis(2));
    }

    pages.push(
      <PaginationItem key={totalPages}>
        <PaginationLink
          href='#'
          isActive={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`${currentPage === totalPages ? 'bg-muted-foreground text-black' : ''}`}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );

    return pages;
  };
  return (
    <>
      <Pagination className='mt-4'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href='#'
              onClick={handlePrevious}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>
          {getPaginationItems()}
          <PaginationItem>
            <PaginationNext
              href='#'
              onClick={handleNext}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
