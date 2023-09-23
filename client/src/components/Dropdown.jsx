const Dropdown = ({ onSelect, disabledOption, dropdownOptions }) => {
    const handleSelect = (event) => {
      const selectedValue = event.target.value;
      const selectedOption = dropdownOptions.find(
        (option) => option.competition_id === selectedValue
      );
      if (selectedOption) {
        onSelect(selectedOption); // Set the entire selected competition object
      }
    };
    
    return (
      <>
        <select
          id="dropdown"
          className="bg-gray-50 border border-gray-300 text-[#373234] text-sm rounded-sm focus:ring-[#02e1dc] focus:border-[#02e1dc] block w-full p-2.5"
          onChange={handleSelect}
        >
          <option value="" disabled selected>
            {disabledOption}
          </option>
          {dropdownOptions.map((option) => (
            <option key={option.competition_id} value={option.competition_id}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  };
  
  export default Dropdown;
  