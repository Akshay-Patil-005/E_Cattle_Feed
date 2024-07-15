import React, { useState } from 'react';

function SellForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        district: '',
        taluka: '',
        photo: null,
        area: '',
        date: '',
        price: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <div className="container">
            <div className="signup-content">
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <h2>विक्री केंद्र</h2>
                        <div className="form-group">
                            <label htmlFor="name">संपूर्ण नाव :</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="आपले संपूर्ण नाव" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">मोबाईल नंम्बर :</label>
                            <input type="tel" name="mobile" id="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="मोबाईल नंम्बर" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">जिल्ल्याचे नाव :</label>
                            <select name="district" id="district" value={formData.district} onChange={handleInputChange} required>
                                <option value="">जिल्हा निवडा</option>
                                {/* Add your district options here */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taluka">तालोक्याचे नाव :</label>
                            <select name="taluka" id="taluka" value={formData.taluka} onChange={handleInputChange} required>
                                <option value="">तालोका निवडा</option>
                                {/* Taluka options will be populated based on district selection */}
                            </select>
                        </div>
                        {/* Add more form fields as needed */}
                        <div className="form-group">
                            <label htmlFor="photo">चाऱ्याचे फोटो:</label>
                            <input type="file" name="photo" id="photo" accept="image/*" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="area">लागवडीचा क्षेत्र :</label>
                            <input type="number" name="area" id="area" value={formData.area} onChange={handleInputChange} placeholder="एकर मध्ये टाका" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">लागवडीची तारीख :</label>
                            <input type="date" name="date" id="date" value={formData.date} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">अपेक्षित किंमत :</label>
                            <input type="number" name="price" id="price" value={formData.price} onChange={handleInputChange} placeholder="अपेक्षित असणारी रक्कम टाका" required />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="फिर्ष भरा" className="btn" />
                            <input type="submit" onClick={handleSubmit} value="सब्मिट" className="btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SellForm;
