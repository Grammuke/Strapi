'use strict';

/**
 * A set of functions called "actions" for `Subscribe`
 */

module.exports = {
  index: async ctx => {
    const { email } = ctx.request.body
    if(!email){
      ctx.status = 400
      ctx.body = "Email is required"
      return
    }
    try{
      const response = await strapi.services.mailchimp.request({
        method: 'post',
        path: '/lists/c2axxxxx/members',
        body: {
          email_address: email,
          status: "subscribed"
        }
      })
      const { _links, ...res } = response
      ctx.status = res.statusCode 
      ctx.body = JSON.stringify(res)
    }catch(err){
      ctx.status = err.status
      ctx.body = err.detail
    }

  }
}