import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, Typography } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import React from "react";
import { ExtraProps } from "../../../../@types/components/Global/DataTableProTypes";
import CustomTextField from "../../TextField/CustomTextField";
import useStyles from "./DataTablePro.Style";
import "./dataTablePro.style.css";

const DataTablePro: React.FC<ExtraProps> = (props) => {
    const {
        tableId = "datatable_id",
        rows = [],
        rowHeight = 40,
        columns = [],
        checkboxSelection = false,
        pagination = true,
        rowsPerPageOptions = [10, 15, 20, 25, 50],
        rowCount = 0,
        onPageChange,
        onPageSizeChange,
        pageSize = 10,
        loading = false,
        onSelectionModelChange,
        hideFooterSelectedRowCount = true,
        searchStatus = true,
        searchText = "Search",
        handleFilter,
        selectedItems = [],
        customHeaderButtons = null,
        disableSelectionOnClick = true,
        otherFilters = null,
        autoHeight = true,
        paginationMode = "server",
        density = "comfortable",
        ...rest
    } = props;
    const classes = useStyles();

    const searchBox = () => {
        return (
            <CustomTextField
                id={`search_on_custom_datatable_${tableId}`}
                type="text"
                placeholder={searchText === undefined ? "Search" : searchText}
                aria-label="Search Input"
                handleChange={(e) => {
                    if (
                        searchStatus &&
                        handleFilter !== null &&
                        typeof handleFilter !== "undefined"
                    ) {
                        handleFilter(e);
                    }
                }}
                color="info"
                sx={{
                    backgroundColor: "action.focus"
                }}
                customClass="action_bar_search_box"
                inputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: "info.main" }} />
                        </InputAdornment>
                    )
                }}
            />
        );
    };

    const tableTopFilterBar = () => {
        return (
            <Box className="table_top_filter_bar">
                <Box className="other_filter">{otherFilters != null ? otherFilters() : ""}</Box>
                {searchStatus ? searchBox() : null}
            </Box>
        );
    };

    const SelectedItemBar = () => {
        if (selectedItems.length > 0) {
            return (
                <Box className={classes.tableSelectedItemBar}>
                    <Typography
                        variant="subtitle2"
                        color="text.fill"
                        sx={{
                            fontFamily: "Gotham Pro Medium !important",
                            fontStyle: "normal !important",
                            fontWeight: "normal !important",
                            fontSize: "0.875rem !important",
                            lineHeight: "1.5rem !important",
                            letterSpacing: "0.17px !important"
                        }}
                    >
                        {selectedItems.length} items Selected
                    </Typography>
                    {customHeaderButtons && <Box className="">{customHeaderButtons}</Box>}
                </Box>
            );
        }
        return null;
    };

    return (
        <div className={classes.root}>
            <Box className={classes.content}>
                {selectedItems.length > 0 && <SelectedItemBar />}
                {(typeof otherFilters !== "undefined" || otherFilters != null || searchStatus) &&
                    tableTopFilterBar()}
                <Box className="table_container">
                    <DataGridPro
                        density={density}
                        getRowHeight={({ densityFactor }) => {
                            return rowHeight * densityFactor;
                        }}
                        headerHeight={40}
                        autoHeight={autoHeight}
                        className={classes.tableWrapper}
                        rows={rows}
                        columns={columns}
                        checkboxSelection={checkboxSelection}
                        pagination={pagination}
                        pageSize={pageSize}
                        rowsPerPageOptions={rowsPerPageOptions}
                        paginationMode={paginationMode}
                        rowCount={rowCount}
                        onPageChange={onPageChange}
                        loading={loading}
                        onPageSizeChange={onPageSizeChange}
                        onSelectionModelChange={onSelectionModelChange}
                        hideFooterSelectedRowCount={hideFooterSelectedRowCount}
                        disableSelectionOnClick={disableSelectionOnClick}
                        selectionModel={selectedItems}
                        {...rest}
                    />
                </Box>
            </Box>
        </div>
    );
};

export default DataTablePro;
