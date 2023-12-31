import { useRef } from "react";

interface DateFilterProps {
  onFilter: (date: string) => void;
  onClear: () => void;
  isClearDisabled: boolean;
}
const DateFilter = ({
  onFilter,
  onClear,
  isClearDisabled = false,
}: DateFilterProps) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const cleanUpFilter = () => {
    dateRef.current!.value = "";
    onClear();
  };
  return (
    <div className="row">
      <div className="col">
        <div className="d-flex mb-3">
          <div>
            <div className="form-label">Filter by Date</div>
            <input
              ref={dateRef}
              className="form-control"
              type={"date"}
              onChange={(e) => onFilter(e.target.value)}
            />
          </div>
          <button
            disabled={isClearDisabled}
            className="btn btn-primary align-self-end mx-2"
            onClick={() => cleanUpFilter()}
          >
            Clear filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
