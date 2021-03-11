curl -d '{"listas": {"salaN": [1, 5, 7, 8 ],"salaS": ["a", "x", "n"]}}' -H "Content-Type: application/json" -X POST http://localhost:8080/ordenaLista;
echo;

curl -d '{"intervaloA": [20, 40], "intervaloB": [10, 60]}' -H "Content-Type: application/json" -X GET http://localhost:8080/interlace;
echo;

curl -d '{"intervaloA": [20, 40], "intervaloB": [10, 19]}' -H "Content-Type: application/json" -X GET http://localhost:8080/interlace;
echo;

curl -d '{"intervaloA": [20, 40], "intervaloB": [10, 20]}' -H "Content-Type: application/json" -X GET http://localhost:8080/interlace;
echo;

curl -d '{"intervaloA": [10, 20], "intervaloB": [20, 30]}' -H "Content-Type: application/json" -X GET http://localhost:8080/interlace;
echo;

curl -d '{"intervaloA": [10, 20], "intervaloB": [40, 50]}' -H "Content-Type: application/json" -X GET http://localhost:8080/interlace;
echo;
