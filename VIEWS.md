# Dashboard

- `/`
  -statystyki dzisiejszych zamówień (zdalne lokalne)
  -lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/logowanie`
  -pola na login i hasło
  -guzik do zalogowana (link do dashboard)

# widok dostepnosci stolikow

- `/tables`
  -wybór daty i godziny
  -tabela z listą rezerwacji oraz wydarzeń
  -każda kolumna =1 stolik
  -każdy wiersz = 30 minut
  -ma przypominać widok tgdnia w kalendarzu Google, gdzie w kolumnach zaiast dni są różne stoliki
  -po kliknieciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

- `/tables/booking/:id`
  -zamiera wszystkie informacje dotyczące rezerwacji
  -umozliwia edycję i zapisanie zmian

- `/tables/booking/new`
  -analogicznie do powyzszej, bez poczatkowych informacji

- `/tables/events/:id`
  -analogicznie do powyzszej, dla eventów

- `/tables/events/new`
  -analogicznie do powyzszej, dla eventów, bez poczatkoych informacji

# Widok kelnera

- `/waiter`
- tabela
  - w wierszach stoliki
  - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie dostępne akcje dla danego stolika

- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamowienie (zamowione produkty z opcjami i ceną)
  - kwotę zamówienia

- `/waiter/order/:id`
  -jak powyższa

# widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamowienia jako zrealizowane
