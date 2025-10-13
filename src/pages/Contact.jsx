import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can add email sending logic here
    console.log("Form data:", formData);
    
    // Simulate successful submission
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div style={{ 
      backgroundColor: "#000", 
      minHeight: "100vh", 
      color: "#FFA500",
      padding: "40px 20px"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}>
        {/* Title */}
        <h1 style={{
          fontFamily: "'Playwrite US Modern', sans-serif",
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "10px",
          color: "#FFA500",
        }}>
          Contact
        </h1>
        
        <p style={{
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "40px",
          opacity: 0.8,
        }}>
          Have questions or suggestions? Write to us!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}>
          
          {/* Contact Form */}
          <div style={{
            backgroundColor: "#1a1a1a",
            padding: "30px",
            borderRadius: "15px",
            border: "2px solid #FFA500",
          }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: "24px",
              marginBottom: "20px",
              color: "#FFA500",
            }}>
              Send a Message
            </h2>

            {isSubmitted && (
              <div style={{
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                border: "1px solid #00ff00",
                color: "#00ff00",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "20px",
                textAlign: "center",
              }}>
                ✓ Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: "16px"
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: "16px",
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: "16px"
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: "16px",
                  }}
                  required
                />
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: "16px"
                }}>
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: "16px",
                  }}
                  required
                >
                  <option value="">Choose a subject</option>
                  <option value="question">Question about recipes</option>
                  <option value="suggestion">Improvement suggestion</option>
                  <option value="technical">Technical problem</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "25px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: "16px"
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: "16px",
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#FFA500",
                  border: "none",
                  color: "#000",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "'Playwrite US Modern', sans-serif",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ff8c00";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FFA500";
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{
            backgroundColor: "#1a1a1a",
            padding: "30px",
            borderRadius: "15px",
            border: "2px solid #FFA500",
          }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: "24px",
              marginBottom: "25px",
              color: "#FFA500",
            }}>
              Contact Information
            </h2>

            <div style={{ marginBottom: "30px" }}>
              <h3 style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                💌 Email
              </h3>
              <p style={{ fontSize: "16px", margin: "10px 0" }}>
                contact@cookbookdigital.com
              </p>
              <p style={{ fontSize: "16px", margin: "10px 0" }}>
                support@cookbookdigital.com
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3 style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                🕒 Business Hours
              </h3>
              <p style={{ fontSize: "16px", margin: "8px 0" }}>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p style={{ fontSize: "16px", margin: "8px 0" }}>
                <strong>Saturday:</strong> 10:00 AM - 2:00 PM
              </p>
              <p style={{ fontSize: "16px", margin: "8px 0" }}>
                <strong>Sunday:</strong> Closed
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3 style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                📍 Social Media
              </h3>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <div style={{
                  padding: "10px 15px",
                  backgroundColor: "#000",
                  border: "1px solid #FFA500",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "100px",
                }}>
                  <div style={{ fontSize: "14px", marginBottom: "5px" }}>📘</div>
                  <div style={{ fontSize: "12px" }}>Facebook</div>
                </div>
                <div style={{
                  padding: "10px 15px",
                  backgroundColor: "#000",
                  border: "1px solid #FFA500",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "100px",
                }}>
                  <div style={{ fontSize: "14px", marginBottom: "5px" }}>📷</div>
                  <div style={{ fontSize: "12px" }}>Instagram</div>
                </div>
                <div style={{
                  padding: "10px 15px",
                  backgroundColor: "#000",
                  border: "1px solid #FFA500",
                  borderRadius: "8px",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "100px",
                }}>
                  <div style={{ fontSize: "14px", marginBottom: "5px" }}>🐦</div>
                  <div style={{ fontSize: "12px" }}>Twitter</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: "18px",
                marginBottom: "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                ℹ️ About Us
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                CookBook Digital is your favorite platform for delicious recipes. 
                We strive to bring the best Italian and international recipes 
                directly to your kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;