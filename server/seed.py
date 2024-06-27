from app import app
from models import db, User

if __name__ == '__main__':

    with app.app_context():

        print('Deleting records...')
        User.query.delete()

        print('Creating users...')

        users=[]
        usernames = []

        maria = User(username='Maria', role='admin')
        maria.password_hash = 'chess'

        usernames.append('Maria')
        users.append(maria)

        db.session.add(maria)
        db.session.commit()

        print('Database seeded.')