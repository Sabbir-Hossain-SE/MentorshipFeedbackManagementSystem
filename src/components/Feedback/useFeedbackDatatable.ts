import { DateRange } from "@mui/lab";
import { addMonths, subMonths } from "date-fns";
import { useEffect, useState } from "react";
import { convertTimezone, formatDateRange, getBrowserTimeZone } from "../../utils/timeHelper";

const useFeedbackDatatable = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemPerPage, setItemPerPage] = useState<number>(10);
    const [filterSearch, setFilterSearch] = useState<string>("");
    const twoMonthBefore = subMonths(new Date(), 2);
    const twoMonthAfter = addMonths(new Date(), 2);
    const [dateRange, setDateRange] = useState<DateRange<any>>([twoMonthBefore, twoMonthAfter]);
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);

    // const { data, isLoading, isFetching, isSuccess, isError } = useGetFeedbackQuery(
    //     {
    //         id: 1,
    //         currentPage,
    //         rowLimit: itemPerPage,
    //         searchKey: filterSearch,
    //         from: startDate,
    //         to: endDate
    //     },
    //     {
    //         skip: startDate == null || endDate == null
    //     }
    // );

    useEffect(() => {
        if (dateRange && dateRange[0] !== null && dateRange[1] !== null) {
            const tempDateRange = formatDateRange(dateRange);
            setStartDate(convertTimezone(tempDateRange[0], getBrowserTimeZone(), "UTC"));
            setEndDate(convertTimezone(tempDateRange[1], getBrowserTimeZone(), "UTC"));
        }
    }, [dateRange]);

    // DataTable
    const changePage = (page: number) => {
        setCurrentPage(page + 1);
    };
    const pageSizeChange = (value: number) => {
        setItemPerPage(value);
    };

    const handleFilter = async (e: any) => {
        setFilterSearch(e.target.value);
    };

    return {
        dateRange,
        setDateRange,
        changePage,
        pageSizeChange,
        itemPerPage,
        handleFilter
    };
};

export default useFeedbackDatatable;
