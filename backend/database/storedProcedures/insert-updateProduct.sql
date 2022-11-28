create or alter procedure insertOrUpdate (@Productname varchar(60),@description varchar(60),@price int,@imageURL varchar(60),@discountRate int,@deleted int)
as 
begin

	if exists (select 1 from products where Productname = @Productname)
		begin
		update products   set  Productname = @Productname ,description = @description,price = @price,imageURL = @imageURL,discountRate = @discountRate,deleted =@deleted where Productname = @Productname
		end
	else
		begin
		insert into products(Productname,description,price,imageURL,discountRate,deleted) values (@Productname,@description,@price,@imageURL,@discountRate,@deleted)
		end
end