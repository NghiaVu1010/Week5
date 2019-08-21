"use strict";

$(function() {
    let data = [
        { sport: "Football", bestTeam: "Dallas Cowboys" },
        { sport: "Baseball", bestTeam: "Texas Rangers" },
        { sport: "Basketball", bestTeam: "Dallas Mavericks" },
        { sport: "Hockey", bestTeam: "Dallas Stars" },
        { sport: "Soccer", bestTeam: "FCDallas" }
    ];

    let element;
    let len = data.length;

    for(let i = 0; i < len; i++) {
        element = `
        <tr>
          <td>${data[i].sport}</td>
          <td>${data[i].bestTeam}</td>
        </tr>
        `;

        $("#teamDiv").append(element);
    }
})