
export class User {
        
    constructor(
        public id: number = null,
        public email: string = '',
        public first: string = '',
        public last: string = '',
        public pw: string = '',
        public pwconf: string = '',
        public bday: string = ''
    ){}
    
}
