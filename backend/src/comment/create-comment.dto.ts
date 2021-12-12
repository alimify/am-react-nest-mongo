export class CreateCommentDTO {
    readonly username: string;
    readonly post_id: string;
    readonly comment_id: string;
    readonly comment_count: string;
    readonly content: string;
    readonly created_at: Date = new Date();
}