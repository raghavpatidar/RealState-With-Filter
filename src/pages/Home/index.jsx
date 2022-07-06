
import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import { dataList , datalocation , categoryList } from '../../constants';
import './styles.css';
import NavBar from '../../components/Home/NavBar/index'
import Footer from '../../components/Home/Footer';

const Home = () => {


  //All Use States
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const locationarray = [];
  for (let i = 0; i < datalocation.length; i++) {const element = { id : i + 1 , checked : false , label : datalocation[i]}; locationarray.push(element);}
  const [location, setLocation] = useState(locationarray);
  const [category , setCategory] = useState(categoryList);
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  //handel of category managemnet in filter panel
  const handleSelectCategory = (event, value) => {
    const categoryStateList = categoryList;
    const changeCheckedCategory = categoryStateList.map((item) =>{
      var checker = 0;
      for (let i = 0; i < value.length; i++) if(item.id === value[i]) checker = 1;
      return checker === 1  ? { ...item, checked: !item.checked } : item
    }
    );
    setCategory(changeCheckedCategory);
    return !value ? null : setSelectedCategory(value);
  }
  
  const handleSelectRating = (event, value) =>
  !value ? null : setSelectedRating(value);
  
  //handel of location managemnet in filter panel
  const handleChangeChecked = (event , value) => {
    const locationStateList = location;
    const changeCheckedLocation = locationStateList.map((item) =>{
      var checker = 0;
      for (let i = 0; i < value.length; i++) if(item.id === value[i]) checker = 1;
           return checker === 1  ? { ...item, checked: !item.checked } : item
      }
    );
    setLocation(changeCheckedLocation);
    console.log(changeCheckedLocation);
  };

  //handel for price change management in filter panel
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  // Applying all the filters 
  const applyFilters = () => {
    let updatedList = dataList;


     // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Rating Filter
      if(selectedRating && selectedRating.length){
         updatedList = updatedList.filter(
          (item) => parseInt(item.rating) === parseInt(selectedRating)
         );
      }



    // properrty type
    const catogeryChecked = category.filter((item) => item.checked).map((item) => item.label);
    if (catogeryChecked.length) {
      updatedList = updatedList.filter((item) =>
        catogeryChecked.includes(item.category)
      );
    }


    // Location Filter
    const locationsChecked = location.filter((item) => item.checked).map((item) => item.label);

    if (locationsChecked.length) {
      updatedList = updatedList.filter((item) =>
        locationsChecked.includes(item.county)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    
    updatedList.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  //call apply filter whenever any filter changes 
  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, location, searchInput, selectedPrice]);

  return (
    <div className='home'>
      {/* NavBar  */}
      <NavBar
      value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      >
      </NavBar>
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            location={location}
            changeChecked={handleChangeChecked}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
      </div>
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
        <Footer>
          
        </Footer>
    </div>
  );
};

export default Home;
