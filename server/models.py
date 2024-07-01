from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
import secrets

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = (
        '-_password_hash', 
        '-_user_token'
    )

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    role = db.Column(db.String)
    _password_hash = db.Column(db.String)
    _user_token = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        raise AttributeError()
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))  
    
    def set_user_token(self):
        user_token = secrets.token_hex(16)
        self._user_token = user_token
        return self._user_token

    def authenticate_token(self, token):
        return secrets.compare_digest(self._user_token, token)