import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

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
      padding: isMobile ? "20px 15px" : isTablet ? "30px 20px" : "40px 20px"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}>
        {/* Title */}
        <h1 style={{
          fontFamily: "'Playwrite US Modern', sans-serif",
          fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
          textAlign: "center",
          marginBottom: isMobile ? "8px" : "10px",
          color: "#FFA500",
        }}>
          Contact
        </h1>
        
        <p style={{
          textAlign: "center",
          fontSize: isMobile ? "16px" : "18px",
          marginBottom: isMobile ? "30px" : "40px",
          opacity: 0.8,
          lineHeight: "1.5",
        }}>
          Have questions or suggestions? Write to us!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "25px" : "40px",
          alignItems: "start",
        }}>
          
          {/* Contact Form */}
          <div style={{
            backgroundColor: "#1a1a1a",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "15px",
            border: "2px solid #FFA500",
            order: isMobile ? 2 : 1, // Move form below info on mobile
          }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: isMobile ? "20px" : "24px",
              marginBottom: isMobile ? "15px" : "20px",
              color: "#FFA500",
            }}>
              Send a Message
            </h2>

            {isSubmitted && (
              <div style={{
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                border: "1px solid #00ff00",
                color: "#00ff00",
                padding: isMobile ? "12px" : "15px",
                borderRadius: "8px",
                marginBottom: "20px",
                textAlign: "center",
                fontSize: isMobile ? "14px" : "16px",
              }}>
                ✓ Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: isMobile ? "14px" : "16px"
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
                    padding: isMobile ? "14px" : "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: isMobile ? "16px" : "16px",
                    outline: "none",
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: isMobile ? "14px" : "16px"
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
                    padding: isMobile ? "14px" : "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: isMobile ? "16px" : "16px",
                    outline: "none",
                  }}
                  required
                />
              </div>

              {/* Subject */}
              <div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: isMobile ? "14px" : "16px"
                }}>
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: isMobile ? "14px" : "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: isMobile ? "16px" : "16px",
                    outline: "none",
                    cursor: "pointer",
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
              <div style={{ marginBottom: isMobile ? "20px" : "25px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontWeight: "bold",
                  fontSize: isMobile ? "14px" : "16px"
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={isMobile ? "4" : "6"}
                  style={{
                    width: "100%",
                    padding: isMobile ? "14px" : "12px",
                    borderRadius: "8px",
                    border: "1px solid #FFA500",
                    backgroundColor: "#000",
                    color: "#FFA500",
                    fontSize: isMobile ? "16px" : "16px",
                    resize: "vertical",
                    minHeight: isMobile ? "100px" : "120px",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: isMobile ? "16px" : "15px",
                  backgroundColor: "#FFA500",
                  border: "none",
                  color: "#000",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: "bold",
                  fontFamily: "'Playwrite US Modern', sans-serif",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ff8c00";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FFA500";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{
            backgroundColor: "#1a1a1a",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "15px",
            border: "2px solid #FFA500",
            order: isMobile ? 1 : 2, // Move info above form on mobile
          }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: isMobile ? "20px" : "24px",
              marginBottom: isMobile ? "20px" : "25px",
              color: "#FFA500",
            }}>
              Contact Information
            </h2>

            <div style={{ marginBottom: isMobile ? "25px" : "30px" }}>
              <h3 style={{
                fontSize: isMobile ? "16px" : "18px",
                marginBottom: isMobile ? "12px" : "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                💌 Email
              </h3>
              <p style={{ 
                fontSize: isMobile ? "14px" : "16px", 
                margin: "8px 0",
                wordBreak: "break-word"
              }}>
                contact@cookbookdigital.com
              </p>
              <p style={{ 
                fontSize: isMobile ? "14px" : "16px", 
                margin: "8px 0",
                wordBreak: "break-word"
              }}>
                support@cookbookdigital.com
              </p>
            </div>

            <div style={{ marginBottom: isMobile ? "25px" : "30px" }}>
              <h3 style={{
                fontSize: isMobile ? "16px" : "18px",
                marginBottom: isMobile ? "12px" : "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                🕒 Business Hours
              </h3>
              <p style={{ 
                fontSize: isMobile ? "14px" : "16px", 
                margin: "6px 0" 
              }}>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p style={{ 
                fontSize: isMobile ? "14px" : "16px", 
                margin: "6px 0" 
              }}>
                <strong>Saturday:</strong> 10:00 AM - 2:00 PM
              </p>
              <p style={{ 
                fontSize: isMobile ? "14px" : "16px", 
                margin: "6px 0" 
              }}>
                <strong>Sunday:</strong> Closed
              </p>
            </div>

            <div style={{ marginBottom: isMobile ? "25px" : "30px" }}>
              <h3 style={{
                fontSize: isMobile ? "16px" : "18px",
                marginBottom: isMobile ? "12px" : "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                📍 Social Media
              </h3>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                gap: isMobile ? "10px" : "15px",
              }}>
                <div style={{
                  padding: isMobile ? "12px 8px" : "10px 15px",
                  backgroundColor: "#000",
                  border: "1px solid #FFA500",
                  borderRadius: "8px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FFA500";
                  e.target.style.color = "#000";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#FFA500";
                  e.target.style.transform = "translateY(0)";
                }}
                >
                  <div style={{ 
                    fontSize: isMobile ? "16px" : "14px", 
                    marginBottom: "5px" 
                  }}>📘</div>
                  <div style={{ 
                    fontSize: isMobile ? "11px" : "12px",
                    fontWeight: "bold"
                  }}>Facebook</div>
                </div>
                <div style={{
                  padding: isMobile ? "12px 8px" : "10px 15px",
                  backgroundColor: "#000",
                  border: "1px solid #FFA500",
                  borderRadius: "8px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FFA500";
                  e.target.style.color = "#000";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#FFA500";
                  e.target.style.transform = "translateY(0)";
                }}
                >
                  <div style={{ 
                    fontSize: isMobile ? "16px" : "14px", 
                    marginBottom: "5px" 
                  }}>📷</div>
                  <div style={{ 
                    fontSize: isMobile ? "11px" : "12px",
                    fontWeight: "bold"
                  }}>Instagram</div>
                </div>
                <div style={{
                  padding: isMobile ? "12px 8px" : "10px 15px",
                  backgroundColor: "#000",
                  border: "1px solid #FFA500",
                  borderRadius: "8px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FFA500";
                  e.target.style.color = "#000";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#000";
                  e.target.style.color = "#FFA500";
                  e.target.style.transform = "translateY(0)";
                }}
                >
                  <div style={{ 
                    fontSize: isMobile ? "16px" : "14px", 
                    marginBottom: "5px" 
                  }}>🐦</div>
                  <div style={{ 
                    fontSize: isMobile ? "11px" : "12px",
                    fontWeight: "bold"
                  }}>Twitter</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: isMobile ? "16px" : "18px",
                marginBottom: isMobile ? "12px" : "15px",
                color: "#FFA500",
                borderBottom: "1px solid #333",
                paddingBottom: "5px",
              }}>
                ℹ️ About Us
              </h3>
              <p style={{ 
                fontSize: isMobile ? "14px" : "16px", 
                lineHeight: "1.5" 
              }}>
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