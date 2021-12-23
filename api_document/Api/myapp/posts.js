// apidoc -i myapp/ -o apidoc/

/**
 * 
 * @api {get} / GET ALL
 * @apiGroup Memory
 * 
 * @apiParam (Request) {array} posts all posts in database
 * 
 * @apiParam (Response) {Object} _id id of each post
 * @apiParam (Response) {string} title title of each post
 * @apiParam (Response) {string} message message of each post
 * @apiParam (Response) {string} creator creator of each post
 * @apiParam (Response) {array} tags array of tags of each post
 * @apiParam (Response) {string} selectedFile the picture of each post
 * @apiParam (Response) {number} likeCount like count of each post
 * @apiParam (Response) {time} createdAt time that each posts created
 * 
 * 
 
*@apiSuccessExample Success-Response:
{
    "_id": {
        "$oid": "61c1399a910b1536bbfd25f8"
    },
    "title": "Master",
    "message": "NCCU",
    "creator": "Leo",
    "tag": ["1","2","3"]
    "selectedFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEU...",
    "likeCount": {
        "$numberInt": "5"
    },
    "createdAt": {
        "$date": {
            "$numberLong": "1639311816499"
        }

    },
}
 * 
 */

/**
 * 
 * @api {get} /:id GET POST 
 * @apiGroup Memory
 * 
 * @apiParam (Request) {post} _id get the post which id == _id
 * 
 * @apiParam (Response) {Object} _id id of each post
 * @apiParam (Response) {string} title title of each post
 * @apiParam (Response) {string} message message of each post
 * @apiParam (Response) {string} creator creator of each post
 * @apiParam (Response) {array} tags array of tags of each post
 * @apiParam (Response) {string} selectedFile the picture of each post
 * @apiParam (Response) {number} likeCount like count of each post
 * @apiParam (Response) {time} createdAt time that each posts created
 * 
 * 
 
*@apiSuccessExample Success-Response:
{
    "_id": {
        "$oid": "61c1399a910b1536bbfd25f8"
    },
    "title": "Master",
    "message": "NCCU",
    "creator": "Leo",
    "tag": ["1","2","3"]
    "selectedFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEU...",
    "likeCount": {
        "$numberInt": "5"
    },
    "createdAt": {
        "$date": {
            "$numberLong": "1639311816499"
        }

    },
}
 * 
 */

/**
 * 
 * @api {post} / CREATE
 * @apiGroup Memory
 * 
 * @apiParam (Request) {string} creator send the creator of th post
 * @apiParam (Request) {string} title send the title of the post
 * @apiParam (Request) {string} message send the message of the post
 * @apiParam (Request) {array} tags send the tag array of the post
 * 
 * @apiParam (Response) {Object} _id id of each post
 * @apiParam (Response) {string} title title of each post
 * @apiParam (Response) {string} message message of each post
 * @apiParam (Response) {string} creator creator of each post
 * @apiParam (Response) {array} tags array of tags of each post
 * @apiParam (Response) {string} selectedFile the picture of each post
 * @apiParam (Response) {number} likeCount like count of each post
 * @apiParam (Response) {time} createdAt time that each posts created
 * 
 * 
 
*@apiSuccessExample Success-Response:
{
    "_id": {
        "$oid": "61c1399a910b1536bbfd25f8"
    },
    "title": "Master",
    "message": "NCCU",
    "creator": "Leo",
    "tag": ["1","2","3"]
    "selectedFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEU...",
    "likeCount": {
        "$numberInt": "5"
    },
    "createdAt": {
        "$date": {
            "$numberLong": "1639311816499"
        }
    },
}
 * 
 */

/**
 *
 * @api {patch} /:id UPDATE POST
 * @apiGroup Memory
 *
 * @apiParam (Request) {string} creator send the creator of th post
 * @apiParam (Request) {string} title send the title of the post
 * @apiParam (Request) {string} message send the message of the post
 * @apiParam (Request) {array} tags send the tag array of the post
 *
 * @apiParam (Response) {Object} _id id of each post
 * @apiParam (Response) {string} title title of each post
 * @apiParam (Response) {string} message message of each post
 * @apiParam (Response) {string} creator creator of each post
 * @apiParam (Response) {array} tags array of tags of each post
 * @apiParam (Response) {string} selectedFile the picture of each post
 * @apiParam (Response) {number} likeCount like count of each post
 * @apiParam (Response) {time} createdAt time that each posts created
 *
 *
*@apiSuccessExample Success-Response:
{
    "_id": {
        "$oid": "61c1399a910b1536bbfd25f8"
    },
    "title": "Master",
    "message": "NCCU",
    "creator": "Leo",
    "tag": ["1","2","3"]
    "selectedFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEU...",
    "likeCount": {
        "$numberInt": "5"
    },
    "createdAt": {
        "$date": {
            "$numberLong": "1639311816499"
        }
    },
}
 *
 */

/**
 *
 * @api {delete} /:id DELETE
 * @apiGroup Memory
 *
 * @apiParam (Request) {_id} object id of which post to delete
 * @apiParam (Response) {Number} code status code
 * @apiParam (Response) {String} msg status message
 *
 *
*@apiSuccessExample Success-Response:
{
    "code": 200,
    "msg": "Post deleted sucessfully",
}
 *
 */

/**
 *
 * @api {patch} /:id/likePost UPDATE LIKENUM
 * @apiGroup Memory
 *
 * @apiParam (Request) {_id} object id of which post to update
 * @apiParam (Response) {Number} code status code
 * @apiParam (Response) {String} msg status message
 *
 *
*@apiSuccessExample Success-Response:
{
    "code": 200,
    "msg": "Post deleted sucessfully",
}
 *
 */
