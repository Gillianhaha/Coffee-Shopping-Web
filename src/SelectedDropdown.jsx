import './SelectedDropdown.css';

function SelectedDropdown ({category,setCategory,options,setOptions}){

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);

        switch (selectedCategory) {
            case 'Product':
                setOptions(['Coffee Bean', 'Drip Coffee', 'Coffee Tools']);
                break;
            case 'Membership':
                setOptions(['Register', 'Cancel', 'Upgrade']);
                break;
            case 'Web Station':
                setOptions(['Service', 'Accessibility']);
                break;
            default:
                setOptions([]);
        }
    };

    const handleOptionChange = (event) => {
        console.log('Option:', event.target.value);
    };

    return (
        <div className="double-select">
            <label className="category-select-label" htmlFor="category-select">
                Category:
                <select id="category-select" value={category} onChange={handleCategoryChange}>
                    <option value="">(Select A Category)</option>
                    <option value="Product">Product</option>
                    <option value="Membership">Membership</option>
                    <option value="Web Station">Website</option>
                </select>
            </label>

            <label className="option-select-label" htmlFor="option-select">
                Option:
                <select id="option-select" onChange={handleOptionChange}>
                    <option value="">(Select An Option)</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>)
                    )}
                </select>
            </label>
        </div>
    );
};

export default SelectedDropdown;
