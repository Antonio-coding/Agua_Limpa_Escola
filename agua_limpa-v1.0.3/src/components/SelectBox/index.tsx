

import React from "react";
import Select, { Props } from "react-select";
import { ErrorMessage } from "../ErrorMessage";

type selectOptionType = { value: string; label: string };

export type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    placeholder: string;
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    placeholderClassName: string;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    errors: string[];
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      placeholder = "Select",
      className = "",
      options = [],
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value = "",
      errors = [],
      indicator,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className}`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided: any) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided: any) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#56acde",
              "&:hover": { backgroundColor: "#56acde", color: "#ffffff" },
            }),
            singleValue: (provided: any) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided: any) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided: any) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided: any) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided: any) => ({
              ...provided,
              padding: "0",
            }),
            multiValueLabel: (provided: any) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base: any) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { SelectBox };
