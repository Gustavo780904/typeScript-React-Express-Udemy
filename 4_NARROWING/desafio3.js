class UserReview {
    constructor(name, isReview, review) {
        this.name = name;
        this.isReview = isReview;
        if (review) {
            this.review = review;
        }
    }
    static showReviewDetails(user) {
        if (typeof user !== 'undefined' && user.isReview && 'review' in user) {
            switch (user.review) {
                case 1:
                    console.log(`${user.name} avaliou a aplicação como "péssima" atribuindo apenas ${user.review} estrela.`);
                    break;
                case 2:
                    console.log(`${user.name} avaliou a aplicação como "ruim" atribuindo apenas ${user.review} estrelas.`);
                    break;
                case 3:
                    console.log(`${user.name} avaliou a aplicação como "regular" atribuindo apenas ${user.review} estrelas.`);
                    break;
                case 4:
                    console.log(`${user.name} avaliou a aplicação como "boa" atribuindo ${user.review} estrelas.`);
                    break;
                case 5:
                    console.log(`${user.name} avaliou a aplicação como "excelente" atribuindo apenas ${user.review} estrelas.`);
            }
        }
        else
            console.log(`${user.name} não avaliou a aplicação.`);
    }
}
export default UserReview;
