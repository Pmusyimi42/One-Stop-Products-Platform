class ApplicationController < ActionController::API


    wrap_parameters format: []
    # before_action :authorize_user
    rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def encode_token(asset)
        #asset => {living: 'home'}
        JWT.encode(asset, 'mysecret')
    end

    def auth_header
        #{Authorization: 'Bearer <token>'}
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split('')[1]
            # header: {'Authorization': 'Bearer <token>'}
            begin
                JWT.decode(token, 'mysecret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user
        if decoded_token
            email = decoded_token[0]['email']
            @user = User.find_by(email: email)
        end
    end

    def logged_in_user?
        !!current_user
    end

    def authorize_user
        render json: { error: "Not Authorized"}, status: :unauthorized unless logged_in_user?
    end


    private

    def response_not_found
        render json: {error: "#{controller_name.classify} not found"}, status: :not_found
    end

    def unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors}, status: :unprocessable_entity

    end
    

    def encode_token(payload)
        JWT.encode(payload, 'my_s3cr3t')
    
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end       
        end
    end

    def current_user
        if decoded_token
            admin_id = decoded_token[0]['admin_id']
            @admin = Admin.find_by_id(admin_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        render json: {message: 'Please log in'}, status: :unauthorized unless logged_in?

    end
end
