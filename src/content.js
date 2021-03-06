InboxSDK.load('1', 'sdk_furagequit_af3de50c2b').then(function(sdk) {

	// add P0 templates
	sdk.Compose.registerComposeViewHandler(function(composeView) {
        composeView.addButton({
            title: "Escalation Templates",
			iconUrl: "https://raw.githubusercontent.com/bshoop117/handy-chrome-extension/master/dist/Mooshin_48x48.png",
            hasDropdown: true,
            onClick: function(event) {
                // event.composeView.insertTextIntoBodyAtCursor('Hello World!');
				var dropdown = event.dropdown.el;
				dropdown.className += ' escalation-box';

				// add 'Initial Escalation'
				var newDiv = document.createElement("div");
				newDiv.className = 'escalation-box-opt';
				var newContent = document.createTextNode("Initial Escalation");
				newDiv.addEventListener('click', function() {
					event.composeView.insertHTMLIntoBodyAtCursor('<table cellspacing="0" cellpadding="0" dir="ltr" border="1" style="table-layout: fixed; font-size: 13px; font-family: arial, sans, sans-serif; border-collapse: collapse; border: 1px solid rgb(204, 204, 204);"><colgroup><col width="128"><col width="614"></colgroup><tbody><tr style="height: 21px;"><td style="padding: 2px 3px; border: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Incident Report</td><td style="padding: 2px 3px; vertical-align: bottom; border-top: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0);"></td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Issue</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">2-3 Sentences about the issue</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Ticket Number</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">List ticket number</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">P0/P1</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">List severity of the incident (P0, P1, etc.)</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Internal Impact</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">2-3 Sentences about the internal impact to include brands and/or systems impacted or list N/A</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">External Impact</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">List impacted customers by brand or system. 2-3 sentences about the external impact or list N/A</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Estimated Duration</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Projected timeline to resolve the issue (if applicable)</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Additional Details</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">List additional information related to the issue.</td></tr></tbody></table>');
				});
				newDiv.appendChild(newContent);
				dropdown.appendChild(newDiv);

				// add 'Update'
				newDiv = document.createElement("div");
				newDiv.className = 'escalation-box-opt';
				newContent = document.createTextNode("Update");
				newDiv.addEventListener('click', function() {
					event.composeView.insertHTMLIntoBodyAtCursor('<table cellspacing="0" cellpadding="0" dir="ltr" border="1" style="table-layout: fixed; font-size: 13px; font-family: arial, sans, sans-serif; border-collapse: collapse; border: 1px solid rgb(204, 204, 204);"><colgroup><col width="128"><col width="1000"></colgroup><tbody><tr style="height: 21px;"><td style="padding: 2px 3px; border: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Incident Update</td><td style="padding: 2px 3px; border-top: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">(Send update form if issue still persists - P0 requires update every 2 hours, P1 once a day, etc.)</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Issue</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Restate the issue</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Current status</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">State the current status of the issue</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Estimated Duration</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Projected timeline to resolve the issue</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Additional Information</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">State work progress and any essential updates</td></tr></tbody></table>');
				});
				newDiv.appendChild(newContent);
				dropdown.appendChild(newDiv);

				// add 'Communication of Resolution'
				newDiv = document.createElement("div");
				newDiv.className = 'escalation-box-opt';
				newContent = document.createTextNode("Communication of Resolution");
				newDiv.addEventListener('click', function() {
					event.composeView.insertHTMLIntoBodyAtCursor('<table cellspacing="0" cellpadding="0" dir="ltr" border="1" style="table-layout: fixed; font-size: 13px; font-family: arial, sans, sans-serif; border-collapse: collapse; border: 1px solid rgb(204, 204, 204);"><colgroup><col width="128"><col width="1000"></colgroup><tbody><tr style="height: 21px;"><td style="padding: 2px 3px; border: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Incident Closed</td><td style="padding: 2px 3px; vertical-align: bottom; border-top: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0);"></td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Issue</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">RESOLVED - Restate the issue</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Action Items</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">State any action items that need to occur (F/E Brand Managers to draft external customer communication to let them know that the issue has been resolved)*</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Communicator</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">List the point of contact for any follow up questions</td></tr><tr style="height: 21px;"><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Additional Information</td><td style="padding: 2px 3px; border-right: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); font-family: arial; font-size: 110%; color: rgb(0, 0, 0); vertical-align: top;">Share information/findings from the investigation of the incident</td></tr></tbody></table>');
				});
				newDiv.appendChild(newContent);
				dropdown.appendChild(newDiv);
            }
        });

    });

	// add 'Raw View' button
    sdk.Lists.registerThreadRowViewHandler(function(threadRowView) {
        var messageID = threadRowView.getThreadID();
        var url = "/mail/u/0/?ui=2&ik=c6b7f87e21&view=dom&th=" + messageID;

        threadRowView.addActionButton({
            title: "Raw View",
            type: "LINK",
            className: "raw-view-button",
            url: url
        });
    });

});
