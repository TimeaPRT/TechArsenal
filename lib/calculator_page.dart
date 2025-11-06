import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'calculator.dart';

class CalculatorPage extends StatefulWidget {
  const CalculatorPage({super.key});

  @override
  CalculatorPageState createState() => CalculatorPageState();
}

class CalculatorPageState extends State<CalculatorPage> {
  final Calculator _calculator = Calculator();

  void _onPressed(String buttonText) {
    setState(() {
      if (buttonText == 'AC') {
        _calculator.pressAllClear();
      } else if (buttonText == '%') {
        _calculator.pressPercentage();
      } else if (buttonText == '=') {
        _calculator.pressEquals();
      } else if ('+-×÷'.contains(buttonText)) {
        _calculator.pressOperation(buttonText);
      } else if (buttonText == '.') {
        _calculator.pressDecimal();
      } else {
        _calculator.pressNumber(buttonText);
      }
    });
  }

  Color _getOperationColor(String operation) {
    switch (operation) {
      case '÷':
        return const Color(0xFF6EC4DB); // Solid turquoise
      case '×':
        return const Color(0xFFB8A1E1); // Solid lilac
      case '-':
        return const Color(0xFFFFB7D5); // Solid pink
      case '+':
        return const Color(0xFFA1E1B8); // Solid mint
      case '=':
        return const Color(0xFFFFD166); // Solid yellow
      default:
        return const Color(0xFF6EC4DB);
    }
  }

  Widget _buildButton(
    String buttonText, {
    Color? backgroundColor,
    Color textColor = Colors.black,
    double fontSize = 28,
    bool isWide = false,
  }) {
    final bool isOperation = ['÷', '×', '-', '+', '='].contains(buttonText);
    final bool isFunction = ['AC', '%'].contains(buttonText);
    
    final Color bgColor = backgroundColor ?? 
        (isOperation 
            ? _getOperationColor(buttonText)
            : (isFunction 
                ? const Color(0xFFE0E0E0) // Light gray for functions
                : Colors.white)); // Solid white for numbers

    return Container(
      margin: const EdgeInsets.all(8),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(20),
          onTap: () => _onPressed(buttonText),
          child: Container(
            width: isWide ? 160 : 75,
            height: 75,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
              color: bgColor,
              boxShadow: const [
                BoxShadow(
                  color: Color(0x26000000),
                  blurRadius: 10,
                  offset: Offset(0, 5),
                ),
                BoxShadow(
                  color: Color(0x1AFFFFFF),
                  blurRadius: 5,
                  offset: Offset(0, -3),
                ),
              ],
            ),
            child: Center(
              child: Text(
                buttonText,
                style: GoogleFonts.spaceGrotesk(
                  fontSize: fontSize,
                  fontWeight: FontWeight.w500,
                  color: textColor, // All buttons now use the textColor parameter
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  double _getDisplayFontSize(String text) {
    final int length = text.length;
    
    if (length <= 8) return 64.0;    // Normal size for short numbers
    if (length <= 12) return 48.0;   // Medium size for medium numbers
    if (length <= 16) return 36.0;   // Small size for long numbers
    if (length <= 20) return 28.0;   // Very small for very long numbers
    return 24.0;                     // Minimum size for extremely long numbers
  }

  int _getMaxLines(String text) {
    final int length = text.length;
    if (length <= 16) return 1;      // Single line for shorter numbers
    return 2;                        // Two lines for very long numbers
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8F9FA), // Clean light gray background
      body: SafeArea(
        child: Column(
          children: [
            // Display Section - Dynamic font size for long numbers
            Expanded(
              flex: 1,
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                child: Align(
                  alignment: Alignment.bottomRight,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(15),
                      boxShadow: const [
                        BoxShadow(
                          color: Color(0x1A000000),
                          blurRadius: 10,
                          offset: Offset(0, 5),
                        ),
                      ],
                    ),
                    constraints: const BoxConstraints(
                      minHeight: 100, // Ensure enough height for wrapped text
                    ),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      reverse: true,
                      child: ConstrainedBox(
                        constraints: const BoxConstraints(
                          maxWidth: 400, // Limit width to prevent extreme horizontal scrolling
                        ),
                        child: Text(
                          _calculator.display,
                          style: GoogleFonts.spaceGrotesk(
                            fontSize: _getDisplayFontSize(_calculator.display),
                            fontWeight: FontWeight.w300,
                            color: Colors.black,
                            letterSpacing: 1.0,
                          ),
                          maxLines: _getMaxLines(_calculator.display),
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.right,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            
            // Buttons Section - All operation buttons with black text
            Expanded(
              flex: 2,
              child: Container(
                padding: const EdgeInsets.all(20),
                decoration: const BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(30),
                    topRight: Radius.circular(30),
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: Color(0x22000000),
                      blurRadius: 20,
                      offset: Offset(0, -5),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    // First row: AC, %, ÷
                    Expanded(
                      child: Row(
                        children: [
                          _buildButton(
                            'AC',
                            textColor: Colors.black,
                            backgroundColor: const Color(0xFFF0F0F0),
                          ),
                          _buildButton(
                            '%',
                            textColor: Colors.black,
                            backgroundColor: const Color(0xFFF0F0F0),
                          ),
                          _buildButton(
                            '÷',
                            textColor: Colors.black, 
                          ),
                        ],
                      ),
                    ),
                    
                    // Second row: 7, 8, 9, ×
                    Expanded(
                      child: Row(
                        children: [
                          _buildButton('7', textColor: Colors.black),
                          _buildButton('8', textColor: Colors.black),
                          _buildButton('9', textColor: Colors.black),
                          _buildButton(
                            '×',
                            textColor: Colors.black,
                          ),
                        ],
                      ),
                    ),
                    
                    // Third row: 4, 5, 6, -
                    Expanded(
                      child: Row(
                        children: [
                          _buildButton('4', textColor: Colors.black),
                          _buildButton('5', textColor: Colors.black),
                          _buildButton('6', textColor: Colors.black),
                          _buildButton(
                            '-',
                            textColor: Colors.black,
                          ),
                        ],
                      ),
                    ),
                    
                    // Fourth row: 1, 2, 3, +
                    Expanded(
                      child: Row(
                        children: [
                          _buildButton('1', textColor: Colors.black),
                          _buildButton('2', textColor: Colors.black),
                          _buildButton('3', textColor: Colors.black),
                          _buildButton(
                            '+',
                            textColor: Colors.black,
                          ),
                        ],
                      ),
                    ),
                    
                    // Fifth row: 0, ., =
                    Expanded(
                      child: Row(
                        children: [
                          _buildButton(
                            '0',
                            isWide: true,
                            textColor: Colors.black,
                          ),
                          _buildButton('.', textColor: Colors.black),
                          _buildButton(
                            '=',
                            textColor: Colors.black, 
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}