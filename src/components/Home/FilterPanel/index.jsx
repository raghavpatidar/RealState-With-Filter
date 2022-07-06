import React from 'react';
import { categoryList, ratingList } from '../../../constants';
import DropDownList from '../../common/DropDownList';
import SliderPrice from '../../common/SliderPrice';
import './styles.css';

const FilterPanel = ({selectedCategory, selectCategory,selectedRating,selectedPrice,selectRating,location,changeChecked,changePrice,}) => (
  <div className='filter'>
    <div className='input-group'>
      <p className='label'>Property Type</p>
      <DropDownList
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    <div className='input-group'>
      <p className='label'>Location</p>
        <DropDownList
        options={location}
        value={changeChecked}
        selectToggle={changeChecked}
      />
    </div>
    <div className='input-group' style={{minWidth : "200px"}}>
      <p className='label-range'>Price </p>
      <SliderPrice value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className='input-group'>
      <p className='label'> Rating</p>
      <DropDownList
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
