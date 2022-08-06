import React, { useState } from "react";
import "./App.css"
import { Form, Button } from "react-bootstrap"


import Box from './components/Box';
import Header from "./components/Header.js"
import { render } from "@testing-library/react";



// --------------------Data to input-----------------

let allData = [
  {
    Rent: "$100-$400",
    Name: "Palm Harbor",
    Location: "Delhi",
    BedCount: "4",
    BathroomCount: "3",
    Area: "590",
    propType: "House",
    InDate: "12 Aug",
    pic: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  },
  {
    Rent: "$500-$1000",
    Name: "Bevery Springfield",
    Location: "Delhi",
    BedCount: "0",
    BathroomCount: "2",
    Area: "10",
    InDate: "12 Aug",
    propType: "Hall",
    pic: "https://images.unsplash.com/photo-1610379230744-2260350e2f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    Rent: "$1000-$1300",
    Name: "Faulkner Eve",
    Location: "Delhi",
    BedCount: "6",
    BathroomCount: "4",
    Area: "850",
    InDate: "12 Aug",
    propType: "Bunglow",
    pic: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
  },
  {
    Rent: "$100-$400",
    Name: "Golden",
    Location: "Mumbai",
    BedCount: "0",
    BathroomCount: "1",
    Area: "10",
    InDate: "12 Aug",
    propType: "Hall",
    pic: "https://images.unsplash.com/photo-1543325768-b7c960228a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    Rent: "$1000-$1300",
    Name: "Bright Springfield",
    Location: "Mumbai",
    BedCount: "5",
    BathroomCount: "5",
    Area: "1000",
    InDate: "1 Sept",
    propType: "Bunglow",
    pic: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    Rent: "$500-$1000",
    Name: "Jain Villa",
    Location: "Mumbai",
    BedCount: "2",
    BathroomCount: "1",
    Area: "500",
    InDate: "1 Sept",
    propType: "House",
    pic: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"
  },
  {
    Rent: "$500-$1000",
    Name: "Royal Star",
    Location: "Pune",
    BedCount: "2",
    BathroomCount: "1",
    Area: "700",
    InDate: "1 Sept",
    propType: "Bunglow",
    pic: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    Rent: "$1000-$1300",
    Name: "Naman Premier",
    Location: "Pune",
    BedCount: "4",
    BathroomCount: "1",
    Area: "10",
    InDate: "15 Sept",
    propType: "House",
    pic: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
  },
  {
    Rent: "$1000-$1300",
    Name: "Elegent",
    Location: "Pune",
    BedCount: "0",
    BathroomCount: "2",
    Area: "200",
    InDate: "1 Sept",
    propType: "Hall",
    pic: "https://images.unsplash.com/photo-1542665952-14513db15293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    Rent: "$500-$1000",
    Name: "Steroid Tower",
    Location: "Chennai",
    BedCount: "2",
    InDate: "15 Sept",
    BathroomCount: "1",
    Area: "10",
    propType: "Bunglow",
    pic: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]




// ARRAYS DECLARED

let allLocations = ["-Select Location-", "Delhi", "Mumbai", "Pune", "Chennai"]

let dates = ["Select Move-in Date", "12 Aug", "1 Sept", "15 Sept"]

let allPrices = ["-Select Rent-", "$100-$400", "$500-$1000", "$1000-$1300"]

let propertyType = ["-Your Choice-", "House", "Bunglow", "Hall"]



class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      location: "-Select Location-",
      date: "Select Move-in Date",
      rent: "-Select Rent-",
      type: "-Your Choice-",
      search: ""
    };
  }


  // -----------------FUNCTIONS-------------

  changeLocation = (event) => {
    this.setState({ location: event.target.value })
  }

  changeDate = (event) => {
    this.setState({ date: event.target.value })
  }

  changeRent = (event) => {
    this.setState({ rent: event.target.value })
  }


  changeType = (event) => {
    this.setState({ type: event.target.value })
  }


  handleChange = (e) => {
    this.setState({ search: e.target.value })

  }



  render() {


    return (
      <div>
        <Header />

        <div className='app-container'>


          {/* -------------heading of the page with search button------------------- */}

          <div style={{ display: "flex", marginTop: "3rem", marginBottom: "3rem" }}>
            <h2>Search Properties to Rent</h2>

            <Form className="search">
              <Form.Control
                type="search"
                placeholder="Search Location"
                className="me-2"
                aria-label="Search"
                value={this.state.search} onChange={this.handleChange}
              />

            </Form>

          </div>

          {/* --------------------------------------------------------------------------- */}




          {/* -------------------------- FILTERS DROPDOWNS ------------------------------ */}

          <div className='filter-box'>
            <div style={{ backgroundColor: "white", padding: "2rem 3rem 2rem 3rem" }}>

              <p style={{ color: "#7e7c7f", backgroundColor: "white" }}>Location</p>
              <select value={this.state.location} onChange={this.changeLocation}>

                {allLocations.map((e) => (
                  <option>{e}</option>
                ))}

              </select>
            </div>

            <div style={{ backgroundColor: "white", padding: "2rem 3rem 2rem 3rem" }}>

              <p style={{ color: "#7e7c7f", backgroundColor: "white" }}>When</p>
              <select value={this.state.date} onChange={this.changeDate}>
                {dates.map((e) => (
                  <option>{e}</option>
                ))}

              </select>
            </div>

            <div style={{ backgroundColor: "white", padding: "2rem 3rem 2rem 3rem" }}>

              <p style={{ color: "#7e7c7f", backgroundColor: "white" }}>Price</p>
              <select value={this.state.rent} onChange={this.changeRent}>
                {allPrices.map((e) => (
                  <option>{e}</option>
                ))}
              </select>

            </div>

            <div style={{ backgroundColor: "white", padding: "2rem 3rem 2rem 3rem" }}>

              <p style={{ color: "#7e7c7f", backgroundColor: "white" }}>Property Type</p>
              <select value={this.state.type} onChange={this.changeType}>
                {propertyType.map((e) => (
                  <option>{e}</option>
                ))}

              </select>
            </div>


            {/* Search Button */}
            <button className="SearchBtn" >Search</button>

          </div>



          {/* --------------------------------Results--------------------------------------------- */}
          <div className='rent-box'>


            {/* -----DROP DOWN FILTERS--- */}
            {allData.filter((data) => {
              if (this.state.location == data.Location || this.state.location == "-Select Location-") {
                if (this.state.date == data.InDate || this.state.date == "Select Move-in Date") {
                  if (this.state.rent == data.Rent || this.state.rent == "-Select Rent-") {
                    if (this.state.type == data.propType || this.state.type == "-Your Choice-") {
                      if (this.state.search == data.Location || data.Location.toLowerCase().includes(this.state.search.toLowerCase())) {

                        return data;
                      }
                    }
                  }
                }
              }
            }).map((ele) => {
              return (
                <Box price={ele.Rent}
                  name={ele.Name}
                  addr={ele.Location}
                  noOfBeds={ele.BedCount}
                  noOfBathroom={ele.BathroomCount}
                  area={ele.Area}
                  img={ele.pic} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}


export default App;
