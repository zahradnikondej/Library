var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener("DOMContentLoaded", function () {
    var noData = document.getElementById("noData");
    var output = document.getElementById("output");
    var typeSelector = document.getElementById("typNazvu");
    function typeBookOrDvd(type) {
        return type === 1 ? "Book" : type === 2 ? "DVD" : "Unknown";
    }
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var selectedType, response, rentals, message, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        output.innerHTML = "";
                        noData.innerHTML = "";
                        selectedType = typeSelector.value;
                        return [4 /*yield*/, fetch("https://student-fed1.metis.academy/api/RentalEntries")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        rentals = _a.sent();
                        rentals = rentals.filter(function (r) { return !r.isReturned; });
                        console.log(rentals);
                        if (rentals.length === 0) {
                            message = document.createElement("p");
                            message.innerText = "No data to display";
                            noData.appendChild(message);
                            return [2 /*return*/];
                        }
                        if (selectedType === "books") {
                            rentals = rentals.filter(function (r) { return r.titleType === 1; });
                        }
                        else if (selectedType === "dvd") {
                            rentals = rentals.filter(function (r) { return r.titleType === 2; });
                        }
                        _loop_1 = function (i) {
                            var row = document.createElement("tr");
                            createTd(row, rentals[i].member.firstName + " " + rentals[i].member.lastName);
                            createTd(row, rentals[i].title.name);
                            createTd(row, rentals[i].title.author);
                            createTd(row, rentals[i].rentedDate);
                            createTd(row, rentals[i].returnDate);
                            createTd(row, rentals[i].maxReturnDate);
                            createTd(row, typeBookOrDvd(rentals[i].titleType));
                            // icona na vratenie
                            var leftIcon = document.createElement("td");
                            var iconLeft = document.createElement("i");
                            iconLeft.classList.add("fa", "fa-arrow-circle-left", "left");
                            iconLeft.style.color = "green";
                            iconLeft.style.fontSize = "1.2em";
                            iconLeft.addEventListener("mouseover", function () {
                                iconLeft.style.fontSize = "1.4em";
                                iconLeft.style.color = "lightgreen";
                            });
                            iconLeft.addEventListener("mouseout", function () {
                                iconLeft.style.fontSize = "1.2em";
                                iconLeft.style.color = "green";
                            });
                            iconLeft.onclick = function () {
                                returnRent(rentals[i].memberId, rentals[i].titleId, rentals[i].id);
                            };
                            leftIcon.appendChild(iconLeft);
                            row.appendChild(leftIcon);
                            // icona na predlzenie
                            var rightIcon = document.createElement("td");
                            var iconRight = document.createElement("i");
                            iconRight.classList.add("fa", "fa-arrow-circle-right");
                            iconRight.style.color = "blue";
                            iconRight.style.fontSize = "1.2em";
                            iconRight.addEventListener("mouseover", function () {
                                iconRight.style.fontSize = "1.4em";
                                iconRight.style.color = "lightblue";
                            });
                            iconRight.addEventListener("mouseout", function () {
                                iconRight.style.fontSize = "1.2em";
                                iconRight.style.color = "blue";
                            });
                            iconRight.onclick = function () {
                                return prolongRent(rentals[i].memberId, rentals[i].titleId, rentals[i].id);
                            };
                            rightIcon.appendChild(iconRight);
                            row.appendChild(rightIcon);
                            output.append(row);
                        };
                        for (i = 0; i < rentals.length; i++) {
                            _loop_1(i);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    typeSelector.addEventListener("change", fetchData);
    fetchData();
});
function createTd(row, id) {
    var td = document.createElement("td");
    td.textContent = id;
    row.appendChild(td);
}
function prolongRent(memberId, titleId, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("https://student-fed1.metis.academy/api/RentalEntries/ProlongTitle/".concat(id), {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                memberId: memberId,
                                titleId: titleId,
                            }),
                        })];
                case 1:
                    response = _a.sent();
                    location.reload();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function returnRent(memberId, titleId, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("https://student-fed1.metis.academy/api/RentalEntries/ReturnTitle/".concat(id), {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                memberId: memberId,
                                titleId: titleId,
                            }),
                        })];
                case 1:
                    response = _a.sent();
                    location.reload();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
