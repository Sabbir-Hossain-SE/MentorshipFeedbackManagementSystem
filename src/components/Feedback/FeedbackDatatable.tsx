import { Box, Stack, Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import CustomDateRangePicker from "components/Global/DateRangePicker/CustomDateRangePicker";
import DataTablePro from "components/Global/Tables/DataTablePro/DataTablePro";
import CustomTooltip from "components/Global/Tooltip/CustomTooltip";
import useFeedbackDatatable from "./useFeedbackDatatable";

const FeedbackDatatable = () => {
    const { dateRange, setDateRange, changePage, pageSizeChange, itemPerPage, handleFilter } =
        useFeedbackDatatable();
    const otherFilters = () => {
        return (
            <Box sx={{ gap: "10px", display: "flex", flexDirection: "row" }}>
                <CustomDateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
            </Box>
        );
    };
    const NoRowsOverlay = () => {
        return (
            <Stack height="100%" alignItems="center" justifyContent="center">
                <Typography variant="body1" color="text.primary">
                    No Feedback Found
                </Typography>
            </Stack>
        );
    };
    const columns: GridColDef[] = [
        {
            field: "location_name",
            headerName: "Location Name",
            editable: false,
            flex: 3,
            minWidth: 300,
            renderCell: (params: GridRenderCellParams) => {
                return (
                    <Box sx={{ display: "flex", gap: "6px", justifyContent: "center" }}>
                        <Box>
                            <CustomTooltip title={params.row.client?.location_name} placement="top">
                                <Typography
                                    sx={{
                                        whiteSpace: "break-spaces",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}
                                    variant="body2"
                                >
                                    {params.row.client?.location_name}
                                </Typography>
                            </CustomTooltip>
                        </Box>
                    </Box>
                );
            }
        }
    ];

    return (
        <Box sx={{ padding: "16px" }}>
            <DataTablePro
                tableId="campaign-secret-shop-data-table"
                autoHeight={false}
                sx={{
                    height: "calc(100vh - 250px)",
                    "&.MuiDataGrid-root": {
                        backgroundColor: "transparent"
                    },
                    "& .MuiDataGrid-main": {
                        backgroundColor: "background.paper"
                    }
                }}
                rows={[]}
                columns={columns}
                loading={false}
                onPageChange={changePage}
                onPageSizeChange={pageSizeChange}
                // Filter
                searchStatus
                searchText="Search"
                handleFilter={handleFilter}
                otherFilters={otherFilters}
                // pagination
                pagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                pageSize={itemPerPage}
                rowCount={0}
                // rowCount={
                //     !isError && campaignSecretShopDataTableData
                //         ? campaignSecretShopDataTableData.totalItems
                //         : 0
                // }

                // Sorting
                // sortingMode="server"
                // sortingOrder={["desc", "asc"]}
                disableSelectionOnClick
                components={{
                    NoRowsOverlay,
                    NoResultsOverlay: NoRowsOverlay
                }}
            />
        </Box>
    );
};

export default FeedbackDatatable;
