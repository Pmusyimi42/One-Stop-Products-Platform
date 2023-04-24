import React, { useState, useEffect } from 'react';
import './AssignRoleForm.css';

export default function AddAdminForm() {
  const [adminPermissions, setAdminPermissions] = useState({
    access: false,
    create: false,
    edit: false,
    view: false,
    delete: false,
  });

  const [sellerPermissions, setSellerPermissions] = useState({
    access: false,
    create: false,
    edit: false,
    view: false,
    delete: false,
  });

  useEffect(() => {
    fetch('/permissions')
      .then((response) => response.json())
      .then((data) => {
        const admin = data.find((item) => item.role === 'admin');
        const seller = data.find((item) => item.role === 'seller');
        if (admin) {
          setAdminPermissions(admin.permissions);
        }
        if (seller) {
          setSellerPermissions(seller.permissions);
        }
      });
  }, []);

  const handleAdminPermissionChange = (event) => {
    const { name, checked } = event.target;
    setAdminPermissions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSellerPermissionChange = (event) => {
    const { name, checked } = event.target;
    setSellerPermissions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const adminPermissionsData = { role: 'admin', ...adminPermissions };
    const sellerPermissionsData = { role: 'seller', ...sellerPermissions };
    
    const createPermission = (permissionData) => {
      fetch('/permissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(permissionData)
      })
        .then(response => response.json())
        .then(data => console.log('Permission created:', data))
        .catch(error => console.error('Error creating permission:', error));
    };
  
    createPermission(adminPermissionsData);
    createPermission(sellerPermissionsData);
  };

  return (
    <div className="permissions">
      <h2>Permissions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Roles</label>
          <label>Access</label>
          <label>Create</label>
          <label>Edit</label>
          <label>View</label>
          <label>Delete</label>
        </div>
        <div>
          <label>Admin</label>
          <input
            type="checkbox"
            name="access"
            checked={adminPermissions.access}
            onChange={handleAdminPermissionChange}
          />
          <input
            type="checkbox"
            name="create"
            checked={adminPermissions.create}
            onChange={handleAdminPermissionChange}
          />
          <input
            type="checkbox"
            name="edit"
            checked={adminPermissions.edit}
            onChange={handleAdminPermissionChange}
          />
          <input
            type="checkbox"
            name="view"
            checked={adminPermissions.view}
            onChange={handleAdminPermissionChange}
          />
          <input
            type="checkbox"
            name="delete"
            checked={adminPermissions.delete}
            onChange={handleAdminPermissionChange}
          />
        </div>
        <div>
          <label>Seller</label>
          <input
            type="checkbox"
            name="access"
            checked={sellerPermissions.access}
            onChange={handleSellerPermissionChange}
          />
          <input
            type="checkbox"
            name="create"
            checked={sellerPermissions.create}
            onChange={handleSellerPermissionChange}
          />
          <input
            type="checkbox"
            name="edit"
            checked={sellerPermissions.edit}
            onChange={handleSellerPermissionChange}
          />
          <input
            type="checkbox"
            name="view"
            checked={sellerPermissions.view}
            onChange={handleSellerPermissionChange}
          />
          <input
            type="checkbox"
            name="delete"
            checked={sellerPermissions.delete}
            onChange={handleSellerPermissionChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
