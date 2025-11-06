class Calculator {
  double _firstNumber = 0;
  double _secondNumber = 0;
  String _operation = '';
  String _result = '0';
  String _display = '0';
  bool _shouldResetDisplay = false;

  void pressNumber(String number) {
    if (_display == '0' || _shouldResetDisplay) {
      _display = number;
      _shouldResetDisplay = false;
    } else {
      // Limit input to prevent overflow (optional)
      if (_display.length < 20) {
        _display += number;
      }
    }
  }

  void pressOperation(String operation) {
    if (_operation.isNotEmpty && !_shouldResetDisplay) {
      pressEquals();
    }
    _firstNumber = double.parse(_display);
    _operation = operation;
    _shouldResetDisplay = true;
  }

  void pressEquals() {
    if (_operation.isEmpty) return;
    
    _secondNumber = double.parse(_display);
    
    switch (_operation) {
      case '+':
        _result = (_firstNumber + _secondNumber).toString();
        break;
      case '-':
        _result = (_firstNumber - _secondNumber).toString();
        break;
      case '×':
        _result = (_firstNumber * _secondNumber).toString();
        break;
      case '÷':
        _result = _secondNumber != 0 
            ? (_firstNumber / _secondNumber).toString()
            : 'Error';
        break;
      case '%':
        _result = (_firstNumber % _secondNumber).toString();
        break;
      default:
        _result = _display;
    }
    
    // Format the result for better display
    _result = _formatResult(_result);
    
    _display = _result;
    _operation = '';
    _shouldResetDisplay = true;
  }

  void pressPercentage() {
    final currentValue = double.parse(_display);
    _display = (currentValue / 100).toString();
    _shouldResetDisplay = true;
  }

  void pressAllClear() {
    _firstNumber = 0;
    _secondNumber = 0;
    _operation = '';
    _result = '0';
    _display = '0';
    _shouldResetDisplay = false;
  }

  void pressDecimal() {
    if (_shouldResetDisplay) {
      _display = '0.';
      _shouldResetDisplay = false;
    } else if (!_display.contains('.')) {
      _display += '.';
    }
  }

  String _formatResult(String result) {
    if (result == 'Error') return result;
    
    try {
      double number = double.parse(result);
      
      // Use scientific notation for very large or very small numbers
      if (number.abs() > 1e15 || (number.abs() < 1e-10 && number != 0)) {
        return number.toStringAsExponential(6);
      }
      
      // Remove decimal if it's .0
      if (number % 1 == 0) {
        return number.toInt().toString();
      } else {
        // Limit decimal places and remove trailing zeros
        String formatted = number.toStringAsFixed(10).replaceAll(RegExp(r'0*$'), '');
        return formatted.endsWith('.') ? formatted.substring(0, formatted.length - 1) : formatted;
      }
    } catch (e) {
      return result;
    }
  }

  String get display => _display;
}