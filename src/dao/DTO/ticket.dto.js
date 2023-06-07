export default class TicketDTO {
    constructor(ticket) {
        this.code = ticket.code,
        this.purchase_datetime = ticket.purchase_datetime,
        this.amount = ticket.amount,
        this.purchaser = ticket.purchaser,
        this.payment_id = ticket.payment_id;
  }
}
