class Comment {
  id: string;
  user: string;
  text: string;

  constructor(user: string, text: string) {
    this.id = new Date().toISOString();
    this.user = user;
    this.text = text;
  }
}

export default Comment;
