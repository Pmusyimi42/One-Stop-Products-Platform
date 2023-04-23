import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import IndividualIntervalsExample from './IndividualIntervalsExample';

import './CategoriesFilter.css';



function CategoriesFilter() {
  return (
    <div class="container-md">
        <h1><AiOutlineMenu /> Categories </h1>
        <div>
        <table class="tabel">
        <thead>
            <tr>
            <th scope=""></th>
            </tr>
        </thead>
        <tbody class="table table-bordered">
            <tr>
            <td> Electronics</td>
            </tr>
            <tr>
            <td>Clothing</td>
            </tr>
            <tr>
            <td>Books</td>
            </tr>
            <tr>
            <td>Shoes</td>
            </tr>
            <tr>
            <td>Furniture</td>
            </tr>
            <tr>
            <td>Perfume</td>
            </tr>
        </tbody>
        </table>
    </div>
      <div>
        <IndividualIntervalsExample />
      </div>
  </div>

  )
}

export default CategoriesFilter