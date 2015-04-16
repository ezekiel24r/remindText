if(Meteor.isClient) {
    Template.Send.events = {
       
      'click input[type=button]' : function () {
        var test = $('textarea[id=msg01]').val();
        if(test.localeCompare("") == 0)
          return false;
        var selection = {
          field: $( "mnu" ).val()
        }
        Meteor.call('sendOutMsg', $('input[id=add01]').val(),$('textarea[id=msg01]').val(), function(err,response) {
          if(err) {
              Session.set('serverDataResponse', "Error:" + err.reason);
              return;
          }
          Session.set('serverDataResponse', response);
        });
        $('textarea[id=msg01]').val("");
        $('textarea[id=msg01]').focus();
        return false;
      }
    };
};

        check(number, String);
        check(textmsg, String);


        var msg = textmsg;


        process.env.MAIL_URL="smtp://EMAILGOESHERE:PASSWORDGOESHERE@smtp.gmail.com:465/";
        Email.send({
          from: "EMAILGOESHERE",
          to:  number.concat("@txt.att.net"),
          subject: "",
          text: msg
        })
        Email.send({
          from: "EMAILGOESHERE",
          to:  number.concat("@vtext.com"),
          subject: "",
          text: msg
        }); 
      }
    });   
  });
}
