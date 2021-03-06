import em2 from '../src/model' 
import {parseData, exception} from './parseData'

export default new em2({
    url: 'v1/user',
    name: 'user',
    fields: {
        name: {
            type: String,
            default: '',
        },
        age: {
            type: Number,
        },
        gender: {
            type: String,
            default: 'male'
        },
        photos: {
            type: Array,
        },
        anti_social: {
            type: Boolean,
            default: true,
        }
    },
}, {
    pkey: 'id',
    parseData,
    exception
})
