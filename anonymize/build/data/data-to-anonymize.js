"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompanyReq1 = { id: "company1", name: "Tesla" };
var CompanySub1 = { id: "company1", name: "Hollywood" };
var Requester1 = { id: "req1", name: "Elon Musk", email: "elon.musk@tesla.com", organization: CompanyReq1 };
var Submitter1 = { id: "submit1", name: "jean dujardin", email: "jean.dujardin@oss.fr", organization: CompanySub1 };
var Requester2 = { id: "req2", name: "Steve Jobs", email: "steve.jobs@rip.com" };
var Submitter2 = { id: "submit2", name: "jean dujardin", email: "jean.dujardin@oss.fr" };
var Requester3 = { id: "req3", name: "Didier Raoult", email: "didier.raoult@latimone.fr" };
var Submitter3 = { id: "submit3", name: "manu macron", email: "emmanuel.macron@elysee.fr" };
var M1 = { id: "msg1", requester: Requester1, submitter: Submitter1, title: "Paypal paying", content: "I'm sad that paypal not pay" };
var M2 = { id: "msg2", requester: Requester2, submitter: Submitter2, title: "Apple film", content: "I want to play in an apple film" };
var M3 = { id: "msg3", requester: Requester3, submitter: Submitter3, title: "Covid-19", content: "covid is just a little flue" };
exports.dataToAnonymize = [M1, M2, M3];
