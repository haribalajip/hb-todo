const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = require('./secrets.json'); // Replace with your service account path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hb-todo-react-default-rtdb.firebaseio.com" // If you're using Realtime Database
});

const db = admin.firestore();

async function updateCreatedAtWithTimestamp() {
  try {
    const usersSnapshot = await db.collection('users').listDocuments();

    for (const userDocRef of usersSnapshot) {
      const userId = userDocRef.id;
      const tasksSnapshot = await db.collection(`users/${userId}/tasks`).get();

      for (const taskDoc of tasksSnapshot.docs) {
        const taskId = taskDoc.id;
        const taskRef = db.collection(`users/${userId}/tasks`).doc(taskId);

        const taskData = taskDoc.data();
        if (taskData.createdAt === null) {
          await taskRef.update({ createdAt: "2025-01-28T10:09:50.736Z" });
          console.log(`Updated createdAt in task: ${taskId} in user: ${userId}`);
        } else {
          console.log(`Task: ${taskId} in user: ${userId} createdAt is not null, skipping.`);
        }
      }
    }

    console.log('Finished updating createdAt in all task documents.');
  } catch (error) {
    console.error('Error updating createdAt:', error);
  }
}

updateCreatedAtWithTimestamp();