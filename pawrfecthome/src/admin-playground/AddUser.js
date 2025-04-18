import React, { useState } from "react";
import supabase from "../db/SupabaseClient";
import bcrypt from "bcryptjs";
import Swal from 'sweetalert2'; // Import SweetAlert
import "./admin-playground-styles/AddUser.css";

function AddUser() {
    const [formData, setFormData] = useState({
        roleID: "",
        firstName: "",
        middleName: "",
        lastName: "",
        cellNumber: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Remove submitMessage state since we'll use SweetAlert instead

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.roleID) newErrors.roleID = "Role is required.";
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.cellNumber) newErrors.cellNumber = "Cell number is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";

        if (formData.cellNumber && !/^\d{10}$/.test(formData.cellNumber)) {
            newErrors.cellNumber = "Cell number must be exactly 10 digits.";
        }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (formData.password && !passwordRegex.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Show loading indicator with SweetAlert
            Swal.fire({
                title: 'Processing',
                text: 'Adding new user...',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                // Hash the password using bcrypt
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(formData.password, salt);

                // Prepare data for insertion to database
                const userData = {
                    roleID: parseInt(formData.roleID),
                    firstName: formData.firstName,
                    middleName: formData.middleName || null,
                    lastName: formData.lastName,
                    cellNumber: formData.cellNumber,
                    email: formData.email,
                    password: hashedPassword,
                };

                // Insert data into tbl_users table
                const { data, error } = await supabase
                    .from('tbl_users')
                    .insert([userData])
                    .select();

                if (error) {
                    throw error;
                }

                // Success message with SweetAlert
                Swal.fire({
                    title: 'Success!',
                    text: 'User has been added successfully',
                    icon: 'success',
                    confirmButtonColor: '#ff6f61',
                    confirmButtonText: 'Great!'
                });

                // Reset form
                setFormData({
                    roleID: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    cellNumber: "",
                    email: "",
                    password: "",
                });

            } catch (error) {
                console.error("Error adding user:", error);

                // Error message with SweetAlert
                Swal.fire({
                    title: 'Error!',
                    text: error.message || 'Failed to add user. Please try again.',
                    icon: 'error',
                    confirmButtonColor: '#ff6f61',
                    confirmButtonText: 'OK'
                });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Form validation failed - show an alert for this too
            Swal.fire({
                title: 'Validation Error',
                text: 'Please check the form for errors',
                icon: 'warning',
                confirmButtonColor: '#ff6f61'
            });
        }
    };

    return (
        <div className="add-user-container">
            <h2>Add New User</h2>
            {/* Remove the alert div since we're using SweetAlert */}

            <form onSubmit={handleSubmit} noValidate>
                {/* Your existing form fields remain the same */}

                {/* Role selection */}
                <div className="form-group">
                    <label>Role:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="roleID"
                                value="1"
                                checked={formData.roleID === "1"}
                                onChange={handleChange}
                                required
                            /> Admin
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="roleID"
                                value="2"
                                checked={formData.roleID === "2"}
                                onChange={handleChange}
                                required
                            /> Employee
                        </label>
                    </div>
                    {errors.roleID && <span className="error-message">{errors.roleID}</span>}
                </div>

                {/* First Name */}
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        maxLength="50"
                        required
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                {/* Middle Name */}
                <div className="form-group">
                    <label htmlFor="middleName">Middle Name (Optional):</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        maxLength="50"
                    />
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        maxLength="50"
                        required
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>

                {/* Cell Number */}
                <div className="form-group">
                    <label htmlFor="cellNumber">Cell Number:</label>
                    <input
                        type="tel"
                        id="cellNumber"
                        name="cellNumber"
                        value={formData.cellNumber}
                        onChange={handleChange}
                        pattern="\d{10}"
                        title="Cell number must be exactly 10 digits."
                        required
                    />
                    {errors.cellNumber && <span className="error-message">{errors.cellNumber}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        minLength="8"
                        title="Must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
                        required
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>


                <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Processing..." : "Add User"}
                </button>
            </form>
        </div>
    );
}

export default AddUser;