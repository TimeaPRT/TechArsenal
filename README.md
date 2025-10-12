# Notes App

---

### Examen Practic Front-End: Aplicație de Notițe

## Obiectiv

Construiește o aplicație simplă de notițe folosind template-ul descărcat și gestionează versiunea codului folosind Git.

## Cerințe de implementare

### Setup inițial:

1. Clonează repository-ul de pe GitHub.
2. Creează un branch nou din main cu formatul feat/nume_prenume (ex. feat/ion_popescu).
3. În acest branch, adaugă un folder nou cu numele tău în format `nume_prenume` în directorul `pages` (ex. src/pages/ion*popescu).
   \_Toată implementarea ta va fi realizată în acest folder.*

## Implementarea funcționalităților aplicației:

# Exercițiu Practic Front-End: Aplicație de Notițe

## Obiectiv

Creează o aplicație simplă de notițe folosind componentele `AddNoteTemplate` și `NoteCard` ca punct de plecare.

---

### Adăugare Notițe (30 minute)

1. **Pregătire componente:**
   - Folosește componentele `AddNoteTemplate` și `NoteCard` pentru a crea aplicația de notițe.
2. **Crearea componentei `AddNote`:**

   - Creează un fișier nou pentru componenta `AddNote`.
   - Copiază codul din `AddNoteTemplate` în `AddNote`.
   - **Notă:** Folosește codul din `AddNoteTemplate` ca punct de pornire, dar **nu modifica codul din** `AddNoteTemplate`.
   - Importa componenta `NoteCard` **nu modifica codul din ea**

3. **Crearea componentei `AddNotes`:**
   - Creează o componentă nouă `AddNote`.
   - Implementează logica pentru adăugarea unei notițe (practic aceasta va include componentele de `AddNote` - adaugare si `NoteCard` - afisare nitita).
   - La apăsarea butonului de adăugare, o nouă notiță trebuie să fie adăugată și afișată în listă ca un card.

---

### Afișare Notițe (20 minute)

1. **Componenta `NoteList`:**
   - În componenta `NoteList`, afișează notițele adăugate.
   - Fiecare notiță trebuie să includă titlul și conținutul, afișate într-un format ordonat.

---

### Salvare în Memorie (20 minute)

- Gestionarea notițelor se va face **doar în starea componentelor**.
- **Important**: Nu folosi `localStorage` sau baze de date pentru stocare.

---

### Utilizarea Git și PR (Pull Request)

. **Deschiderea unui PR:**

- După finalizarea implementării, deschide un Pull Request (PR) din branch-ul tău `feat/nume_prenume` către `main`.
- Titlul PR-ului trebuie să fie descriptiv, iar descrierea să includă o scurtă prezentare a funcționalității implementate.
- Solicită un review de la mentor pentru a valida implementarea.

---

### Structura Proiectului și Styling

1. **CSS:**

   - Stilizează componentele pentru a avea o afișare ordonată. Afișează notițele într-un layout de tip grid, cu titlul și descrierea fiecărei note evidențiate.

2. **Numele fișierelor:**
   - Asigură-te că numele fișierelor și structura folderelor sunt corecte conform cerințelor.

---

### Timp Total Recomandat

- Adăugare Notițe: **30 minute**
- Afișare Notițe: **20 minute**
- Salvare în Memorie: **20 minute**
- Utilizarea Git și PR: **10 minute**
- Structura Proiectului și Styling: **10 minute**

---

Îți dorim mult succes!
