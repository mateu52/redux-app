1. Pobieranie użytkowników za pomocą Reduksa
Krok 1 - Przygotowanie: Przygotuj dwa komponenty Home oraz Users. Każdy z nich osadź w routingu (np. Home pod adresem /, Users pod adresem /users). Komponent Users niech wyświetla listę 10 użytkowników pobraną za pomocą API z https://randomuser.me/ lub Mock Service Worker za każdym razem, gdy wejdziemy w ten komponent (czyli po jego zamontowaniu).

Krok 2 - Zmodyfikuj komponent Home w taki sposób, aby posiadał na ekranie 3 przyciski z odpowiednimi funkcjami:

Load - załadowanie na nowo 10 użytkowników do stanu przechowującego użytkowników
Reset - wyzerowanie listy użytkowników
Add - pobiera jeszcze raz listę, ale dodaje tylko jednego użytkownika do tej już istniejącej
Krok 3 - Zmodyfikuj komponent Users w taki sposób, aby po zamontowaniu sprawdzał, czy istnieją już użytkownicy w stanie aplikacji. Jeśli tak, to wyświetl tę listę. Jeśli nie, pobierz dane z API. Po przejściu na Home oraz powrót do Users komponent powinien wstawiać dane ze stanu aplikacji, który pełni w tym przypadku rodzaj cache.

2. System powiadomień
Stwórz komponent Message, który będzie przyjmował w propsach:

typ (info, warning, danger)
oraz treść wiadomości.
W zależności od typu powinien zmieniać się kolor tła oraz obramowania tego komponentu.

Komponent może być osadzony w głównej aplikacji. Domyślnie będzie ukryty. Będziemy go pokazywali dispatchując akcje - np. stwórzmy kawałek stanu aplikacji ui, a w nim tablicę messages. Do niego kreator np. addMessage, który przyjmie typ oraz wiadomość, a następnie doda nasz komunikat do tablicy wiadomości.

Zróbmy dispatch tych kreatorów w momencie, gdy korzystamy z przycisków w zadaniu pierwszym. Czyli wyświetlajmy wiadomości w trakcie ładowania, resetowania i dodawania do naszej listy użytkowników.

3. Komponent z kontaktem
Stwórz trzeci komponent z formularzem kontaktowym za pomocą react-hook-form. Po jego wysłaniu (na jakiś dowolny adres, możesz skorzystać z https://requestbin.com/) wyświetl komunikat z zadania 2 o powodzeniu lub niepowodzeniu akcji. Nie zaszywaj adresu URL bezpośrednio w aplikacji, skorzystaj z zmiennych środowiskowych i pliku .env (opis tutaj: https://create-react-app.dev/docs/adding-custom-environment-variables/)

4. Snackbar
Zmodyfikuj swój komponent Message aby:

posiadał przycisk x po kliknięciu w który wiadomośc znika z interfejsu oraz stanu aplikacji
wyświetlał się na ekranie przez określony czas, a później znikał
Jako przykład możesz zobaczyć komponent Snackbar z Material UI