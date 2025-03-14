const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = require('./secrets.json'); // Replace with your service account path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hb-todo-react-default-rtdb.firebaseio.com" // If you're using Realtime Database
});

const db = admin.firestore();

async function addFieldToTasks() {
  try {
    const usersSnapshot = await db.collection('users').listDocuments(); // Use listDocuments()

    for (const userDocRef of usersSnapshot) { // Iterate through DocumentReference objects
      const userId = userDocRef.id;
      const tasksSnapshot = await db.collection(`users/${userId}/tasks`).get(); // Get tasks for each user

      for (const taskDoc of tasksSnapshot.docs) {
        const taskId = taskDoc.id;
        const taskRef = db.collection(`users/${userId}/tasks`).doc(taskId);

        const taskData = taskDoc.data();
        if(taskData.notes === undefined){
          await taskRef.update({ notes: null });
          console.log(`Added notes to task: ${taskId} in user: ${userId}`);
        } else {
          console.log(`Task: ${taskId} in user: ${userId} already has notes, skipping.`);
        }
      }
    }

    console.log('Finished adding notes to all task documents.');
  } catch (error) {
    console.error('Error adding notes:', error);
  }
}

addFieldToTasks();