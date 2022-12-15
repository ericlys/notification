import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  //static - because i don`t need to instantiate it
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createAt: notification.createdAt,
    };
  }
}
