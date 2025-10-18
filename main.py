# main.py

import string
import os

# ---------------------------
# Function: Read text from a file
# ---------------------------
def read_text_from_file(filename):
    if not os.path.exists(filename):
        print(f"⚠️ File '{filename}' not found.")
        return None

    with open(filename, "r", encoding="utf-8") as file:
        text = file.read()
    return text

# ---------------------------
# Function: Read text from user input
# ---------------------------
def read_text_from_input():
    text = input("Enter the text for analysis:\n> ")
    return text

# ---------------------------
# Function: Preprocess the text
# ---------------------------
def preprocess_text(text):
    stopwords = {
        "a", "an", "the", "is", "am", "are", "was", "were", "in", "on",
        "of", "to", "and", "for", "by", "with", "at", "from", "as", "it"
    }

    text = text.lower()
    text = text.translate(str.maketrans("", "", string.punctuation))
    words = text.split()
    
    # Filter out stopwords and very short words (less than 3 letters)
    filtered_words = [w for w in words if w not in stopwords and len(w) > 2]
    return filtered_words

# ---------------------------
# Function: Calculate word frequency
# ---------------------------
def word_frequency(words):
    frequencies = {}
    for word in words:
        frequencies[word] = frequencies.get(word, 0) + 1
    return frequencies

# ---------------------------
# Function: Display results
# ---------------------------
def display_results(frequencies):
    sorted_words = sorted(frequencies.items(), key=lambda x: x[1], reverse=True)
    print("\n📊 Word Frequency (filtered):\n")
    for word, freq in sorted_words:
        print(f"{word:<15} -> {freq} times")

# ---------------------------
# NEW Function: Display statistics
# ---------------------------
def display_summary(frequencies):
    if not frequencies:
        print("\n⚠️ No valid words to analyze.")
        return

    total_words = sum(frequencies.values())
    unique_words = len(frequencies)
    most_common_word = max(frequencies, key=frequencies.get)
    most_common_count = frequencies[most_common_word]

    print("\n📈 Summary:")
    print(f"- Total words: {total_words}")
    print(f"- Unique words: {unique_words}")
    print(f"- Most frequent word: '{most_common_word}' ({most_common_count} times)")

# ---------------------------
# Function: Save results to file
# ---------------------------
def save_results_to_file(frequencies, output_file="results.txt"):
    sorted_words = sorted(frequencies.items(), key=lambda x: x[1], reverse=True)
    with open(output_file, "w", encoding="utf-8") as file:
        file.write("📊 Word Frequency Analysis (Filtered)\n")
        file.write("=====================================\n\n")
        for word, freq in sorted_words:
            file.write(f"{word:<15} -> {freq} times\n")

        # Add summary section
        if frequencies:
            total_words = sum(frequencies.values())
            unique_words = len(frequencies)
            most_common_word = max(frequencies, key=frequencies.get)
            most_common_count = frequencies[most_common_word]

            file.write("\n📈 Summary:\n")
            file.write(f"Total words: {total_words}\n")
            file.write(f"Unique words: {unique_words}\n")
            file.write(f"Most frequent word: {most_common_word} ({most_common_count} times)\n")

    print(f"\n✅ Results saved to '{output_file}'")

# ---------------------------
# Main function (CLI)
# ---------------------------
def main():
    print("=== Word Frequency Analyzer ===\n")

    choice = input("Do you want to analyze a file? (y/n): ").lower().strip()

    if choice == "y":
        filename = input("Enter the file name (e.g., input.txt): ").strip()
        text = read_text_from_file(filename)
        if text is None:
            return
    else:
        text = read_text_from_input()

    words = preprocess_text(text)
    frequencies = word_frequency(words)
    display_results(frequencies)
    display_summary(frequencies)
    save_results_to_file(frequencies)

# ---------------------------
# Entry point
# ---------------------------
if __name__ == "__main__":
    main()
