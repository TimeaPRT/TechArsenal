import React, { useState, useEffect } from "react";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <div style={{ 
      backgroundColor: "#000", 
      minHeight: "100vh", 
      color: "#FFA500",
      padding: isMobile ? "20px 15px" : isTablet ? "30px 20px" : "40px 20px"
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
      }}>
        {/* Title */}
        <h1 style={{
          fontFamily: "'Playwrite US Modern', sans-serif",
          fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
          textAlign: "center",
          marginBottom: isMobile ? "15px" : "20px",
          color: "#FFA500",
        }}>
          About CookBook Digital
        </h1>
        
        <p style={{
          textAlign: "center",
          fontSize: isMobile ? "16px" : "18px",
          marginBottom: isMobile ? "30px" : "50px",
          opacity: 0.8,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.5",
        }}>
          Your ultimate digital kitchen companion for delicious recipes from around the world
        </p>

        {/* Our Story & Mission - Responsive Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "25px" : "40px",
          marginBottom: isMobile ? "30px" : "50px",
        }}>
          
          {/* Our Story */}
          <div style={{
            backgroundColor: "#1a1a1a",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "15px",
            border: "2px solid #FFA500",
          }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: isMobile ? "20px" : "24px",
              marginBottom: isMobile ? "15px" : "20px",
              color: "#FFA500",
            }}>
              🍳 Our Story
            </h2>
            <p style={{ 
              fontSize: isMobile ? "14px" : "16px", 
              lineHeight: "1.6", 
              marginBottom: "15px" 
            }}>
              CookBook Digital was born from a passion for cooking and a desire to make 
              authentic recipes accessible to everyone. We believe that great food brings 
              people together and creates unforgettable memories.
            </p>
            <p style={{ 
              fontSize: isMobile ? "14px" : "16px", 
              lineHeight: "1.6" 
            }}>
              Our platform combines traditional cooking wisdom with modern technology, 
              offering you a seamless experience in discovering, saving, and sharing 
              your favorite recipes.
            </p>
          </div>

          {/* Our Mission */}
          <div style={{
            backgroundColor: "#1a1a1a",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "15px",
            border: "2px solid #FFA500",
          }}>
            <h2 style={{
              fontFamily: "'Playwrite US Modern', sans-serif",
              fontSize: isMobile ? "20px" : "24px",
              marginBottom: isMobile ? "15px" : "20px",
              color: "#FFA500",
            }}>
              🎯 Our Mission
            </h2>
            <p style={{ 
              fontSize: isMobile ? "14px" : "16px", 
              lineHeight: "1.6", 
              marginBottom: "15px" 
            }}>
              To inspire home cooks of all skill levels to explore new cuisines, 
              techniques, and flavors. We're committed to providing reliable, 
              tested recipes that work every time.
            </p>
            <p style={{ 
              fontSize: isMobile ? "14px" : "16px", 
              lineHeight: "1.6" 
            }}>
              Whether you're a beginner or an experienced chef, CookBook Digital 
              is here to support your culinary journey with easy-to-follow 
              instructions and beautiful photography.
            </p>
          </div>
        </div>

        {/* Features */}
        <div style={{
          backgroundColor: "#1a1a1a",
          padding: isMobile ? "20px" : "30px",
          borderRadius: "15px",
          border: "2px solid #FFA500",
          marginBottom: isMobile ? "30px" : "40px",
        }}>
          <h2 style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: isMobile ? "20px" : "24px",
            marginBottom: isMobile ? "20px" : "25px",
            color: "#FFA500",
            textAlign: "center",
          }}>
            ✨ What We Offer
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? "15px" : "20px",
          }}>
            <div style={{ 
              textAlign: "center", 
              padding: isMobile ? "15px" : "20px" 
            }}>
              <div style={{ 
                fontSize: isMobile ? "30px" : "36px", 
                marginBottom: isMobile ? "10px" : "15px" 
              }}>📚</div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "10px", 
                color: "#FFA500" 
              }}>Recipe Collection</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                lineHeight: "1.5" 
              }}>
                Hundreds of carefully curated recipes from Italian classics to international favorites
              </p>
            </div>
            
            <div style={{ 
              textAlign: "center", 
              padding: isMobile ? "15px" : "20px" 
            }}>
              <div style={{ 
                fontSize: isMobile ? "30px" : "36px", 
                marginBottom: isMobile ? "10px" : "15px" 
              }}>📱</div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "10px", 
                color: "#FFA500" 
              }}>Easy to Use</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                lineHeight: "1.5" 
              }}>
                User-friendly interface designed for both beginners and experienced cooks
              </p>
            </div>
            
            <div style={{ 
              textAlign: "center", 
              padding: isMobile ? "15px" : "20px" 
            }}>
              <div style={{ 
                fontSize: isMobile ? "30px" : "36px", 
                marginBottom: isMobile ? "10px" : "15px" 
              }}>🆓</div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "10px", 
                color: "#FFA500" 
              }}>Completely Free</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                lineHeight: "1.5" 
              }}>
                Access all our recipes and features without any subscription fees
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div style={{
          backgroundColor: "#1a1a1a",
          padding: isMobile ? "20px" : "30px",
          borderRadius: "15px",
          border: "2px solid #FFA500",
        }}>
          <h2 style={{
            fontFamily: "'Playwrite US Modern', sans-serif",
            fontSize: isMobile ? "20px" : "24px",
            marginBottom: isMobile ? "20px" : "25px",
            color: "#FFA500",
            textAlign: "center",
          }}>
            👨‍🍳 Meet Our Team
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
            gap: isMobile ? "20px" : "25px",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                backgroundColor: "#FFA500",
                borderRadius: "50%",
                margin: "0 auto 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "18px" : "24px",
                color: "#000",
                fontWeight: "bold",
              }}>
                MC
              </div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "5px", 
                color: "#FFA500" 
              }}>Marco Chef</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                opacity: 0.8 
              }}>Head Chef & Recipe Developer</p>
              <p style={{ 
                fontSize: isMobile ? "12px" : "13px", 
                marginTop: "8px",
                lineHeight: "1.4"
              }}>
                Italian cuisine specialist with 15+ years of experience
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                backgroundColor: "#FFA500",
                borderRadius: "50%",
                margin: "0 auto 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "18px" : "24px",
                color: "#000",
                fontWeight: "bold",
              }}>
                SF
              </div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "5px", 
                color: "#FFA500" 
              }}>Sarah Foodie</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                opacity: 0.8 
              }}>Content Creator & Photographer</p>
              <p style={{ 
                fontSize: isMobile ? "12px" : "13px", 
                marginTop: "8px",
                lineHeight: "1.4"
              }}>
                Makes every recipe look as good as it tastes
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                backgroundColor: "#FFA500",
                borderRadius: "50%",
                margin: "0 auto 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "18px" : "24px",
                color: "#000",
                fontWeight: "bold",
              }}>
                TD
              </div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "5px", 
                color: "#FFA500" 
              }}>Tom Developer</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                opacity: 0.8 
              }}>Full Stack Developer</p>
              <p style={{ 
                fontSize: isMobile ? "12px" : "13px", 
                marginTop: "8px",
                lineHeight: "1.4"
              }}>
                Built this platform with love for the cooking community
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                backgroundColor: "#FFA500",
                borderRadius: "50%",
                margin: "0 auto 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "18px" : "24px",
                color: "#000",
                fontWeight: "bold",
              }}>
                NT
              </div>
              <h3 style={{ 
                fontSize: isMobile ? "16px" : "18px", 
                marginBottom: "5px", 
                color: "#FFA500" 
              }}>Nina Tester</h3>
              <p style={{ 
                fontSize: isMobile ? "13px" : "14px", 
                opacity: 0.8 
              }}>Recipe Tester & Nutritionist</p>
              <p style={{ 
                fontSize: isMobile ? "12px" : "13px", 
                marginTop: "8px",
                lineHeight: "1.4"
              }}>
                Ensures every recipe is perfect and nutritious
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;