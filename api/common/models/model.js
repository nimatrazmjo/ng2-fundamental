module.exports = function(Model) {

  Model.incoming = function(req, cb) {
    cb(null, 'Hey there, ' + req.body.sender);
  }
  Model.remoteMethod(
    'incoming',
    { accepts: [
      { arg: 'req', type: 'object', http: function(ctx) {
        return ctx.req;
      }
      }],
      returns: {arg: 'summary', type: 'string'}
    }
  );
};
