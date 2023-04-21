import React from 'react';
import './AssignRoleForm.css';


export default function AssignRoleForm() {

  return (
    <form>
      <label htmlFor="permissions">Permissions</label>
      <div id="permissions" className="permissions">
        <div className="form-container">
          <div className="form-row">
            <label>Roles</label>
            <label>Access</label>
            <label>Create</label>
            <label>Edit</label>
            <label>View</label>
            <label>Delete</label>
          </div>
          <div className="form-row">
            <label>Admin</label>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div className="form-row">
            <label>Seller</label>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </form>
  

  
  );
}
