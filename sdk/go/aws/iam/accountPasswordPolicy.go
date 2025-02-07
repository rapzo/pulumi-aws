// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iam

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// > **Note:** There is only a single policy allowed per AWS account. An existing policy will be lost when using this resource as an effect of this limitation.
//
// Manages Password Policy for the AWS Account.
// See more about [Account Password Policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html)
// in the official AWS docs.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws/iam"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := iam.NewAccountPasswordPolicy(ctx, "strict", &iam.AccountPasswordPolicyArgs{
// 			AllowUsersToChangePassword: pulumi.Bool(true),
// 			MinimumPasswordLength:      pulumi.Int(8),
// 			RequireLowercaseCharacters: pulumi.Bool(true),
// 			RequireNumbers:             pulumi.Bool(true),
// 			RequireSymbols:             pulumi.Bool(true),
// 			RequireUppercaseCharacters: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// IAM Account Password Policy can be imported using the word `iam-account-password-policy`, e.g.
//
// ```sh
//  $ pulumi import aws:iam/accountPasswordPolicy:AccountPasswordPolicy strict iam-account-password-policy
// ```
type AccountPasswordPolicy struct {
	pulumi.CustomResourceState

	// Whether to allow users to change their own password
	AllowUsersToChangePassword pulumi.BoolPtrOutput `pulumi:"allowUsersToChangePassword"`
	// Indicates whether passwords in the account expire. Returns `true` if `maxPasswordAge` contains a value greater than `0`. Returns `false` if it is `0` or _not present_.
	ExpirePasswords pulumi.BoolOutput `pulumi:"expirePasswords"`
	// Whether users are prevented from setting a new password after their password has expired (i.e. require administrator reset)
	HardExpiry pulumi.BoolOutput `pulumi:"hardExpiry"`
	// The number of days that an user password is valid.
	MaxPasswordAge pulumi.IntOutput `pulumi:"maxPasswordAge"`
	// Minimum length to require for user passwords.
	MinimumPasswordLength pulumi.IntPtrOutput `pulumi:"minimumPasswordLength"`
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention pulumi.IntOutput `pulumi:"passwordReusePrevention"`
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters pulumi.BoolOutput `pulumi:"requireLowercaseCharacters"`
	// Whether to require numbers for user passwords.
	RequireNumbers pulumi.BoolOutput `pulumi:"requireNumbers"`
	// Whether to require symbols for user passwords.
	RequireSymbols pulumi.BoolOutput `pulumi:"requireSymbols"`
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters pulumi.BoolOutput `pulumi:"requireUppercaseCharacters"`
}

// NewAccountPasswordPolicy registers a new resource with the given unique name, arguments, and options.
func NewAccountPasswordPolicy(ctx *pulumi.Context,
	name string, args *AccountPasswordPolicyArgs, opts ...pulumi.ResourceOption) (*AccountPasswordPolicy, error) {
	if args == nil {
		args = &AccountPasswordPolicyArgs{}
	}

	var resource AccountPasswordPolicy
	err := ctx.RegisterResource("aws:iam/accountPasswordPolicy:AccountPasswordPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAccountPasswordPolicy gets an existing AccountPasswordPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccountPasswordPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AccountPasswordPolicyState, opts ...pulumi.ResourceOption) (*AccountPasswordPolicy, error) {
	var resource AccountPasswordPolicy
	err := ctx.ReadResource("aws:iam/accountPasswordPolicy:AccountPasswordPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AccountPasswordPolicy resources.
type accountPasswordPolicyState struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword *bool `pulumi:"allowUsersToChangePassword"`
	// Indicates whether passwords in the account expire. Returns `true` if `maxPasswordAge` contains a value greater than `0`. Returns `false` if it is `0` or _not present_.
	ExpirePasswords *bool `pulumi:"expirePasswords"`
	// Whether users are prevented from setting a new password after their password has expired (i.e. require administrator reset)
	HardExpiry *bool `pulumi:"hardExpiry"`
	// The number of days that an user password is valid.
	MaxPasswordAge *int `pulumi:"maxPasswordAge"`
	// Minimum length to require for user passwords.
	MinimumPasswordLength *int `pulumi:"minimumPasswordLength"`
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention *int `pulumi:"passwordReusePrevention"`
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters *bool `pulumi:"requireLowercaseCharacters"`
	// Whether to require numbers for user passwords.
	RequireNumbers *bool `pulumi:"requireNumbers"`
	// Whether to require symbols for user passwords.
	RequireSymbols *bool `pulumi:"requireSymbols"`
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters *bool `pulumi:"requireUppercaseCharacters"`
}

type AccountPasswordPolicyState struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword pulumi.BoolPtrInput
	// Indicates whether passwords in the account expire. Returns `true` if `maxPasswordAge` contains a value greater than `0`. Returns `false` if it is `0` or _not present_.
	ExpirePasswords pulumi.BoolPtrInput
	// Whether users are prevented from setting a new password after their password has expired (i.e. require administrator reset)
	HardExpiry pulumi.BoolPtrInput
	// The number of days that an user password is valid.
	MaxPasswordAge pulumi.IntPtrInput
	// Minimum length to require for user passwords.
	MinimumPasswordLength pulumi.IntPtrInput
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention pulumi.IntPtrInput
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters pulumi.BoolPtrInput
	// Whether to require numbers for user passwords.
	RequireNumbers pulumi.BoolPtrInput
	// Whether to require symbols for user passwords.
	RequireSymbols pulumi.BoolPtrInput
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters pulumi.BoolPtrInput
}

func (AccountPasswordPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*accountPasswordPolicyState)(nil)).Elem()
}

type accountPasswordPolicyArgs struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword *bool `pulumi:"allowUsersToChangePassword"`
	// Whether users are prevented from setting a new password after their password has expired (i.e. require administrator reset)
	HardExpiry *bool `pulumi:"hardExpiry"`
	// The number of days that an user password is valid.
	MaxPasswordAge *int `pulumi:"maxPasswordAge"`
	// Minimum length to require for user passwords.
	MinimumPasswordLength *int `pulumi:"minimumPasswordLength"`
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention *int `pulumi:"passwordReusePrevention"`
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters *bool `pulumi:"requireLowercaseCharacters"`
	// Whether to require numbers for user passwords.
	RequireNumbers *bool `pulumi:"requireNumbers"`
	// Whether to require symbols for user passwords.
	RequireSymbols *bool `pulumi:"requireSymbols"`
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters *bool `pulumi:"requireUppercaseCharacters"`
}

// The set of arguments for constructing a AccountPasswordPolicy resource.
type AccountPasswordPolicyArgs struct {
	// Whether to allow users to change their own password
	AllowUsersToChangePassword pulumi.BoolPtrInput
	// Whether users are prevented from setting a new password after their password has expired (i.e. require administrator reset)
	HardExpiry pulumi.BoolPtrInput
	// The number of days that an user password is valid.
	MaxPasswordAge pulumi.IntPtrInput
	// Minimum length to require for user passwords.
	MinimumPasswordLength pulumi.IntPtrInput
	// The number of previous passwords that users are prevented from reusing.
	PasswordReusePrevention pulumi.IntPtrInput
	// Whether to require lowercase characters for user passwords.
	RequireLowercaseCharacters pulumi.BoolPtrInput
	// Whether to require numbers for user passwords.
	RequireNumbers pulumi.BoolPtrInput
	// Whether to require symbols for user passwords.
	RequireSymbols pulumi.BoolPtrInput
	// Whether to require uppercase characters for user passwords.
	RequireUppercaseCharacters pulumi.BoolPtrInput
}

func (AccountPasswordPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*accountPasswordPolicyArgs)(nil)).Elem()
}

type AccountPasswordPolicyInput interface {
	pulumi.Input

	ToAccountPasswordPolicyOutput() AccountPasswordPolicyOutput
	ToAccountPasswordPolicyOutputWithContext(ctx context.Context) AccountPasswordPolicyOutput
}

func (*AccountPasswordPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*AccountPasswordPolicy)(nil))
}

func (i *AccountPasswordPolicy) ToAccountPasswordPolicyOutput() AccountPasswordPolicyOutput {
	return i.ToAccountPasswordPolicyOutputWithContext(context.Background())
}

func (i *AccountPasswordPolicy) ToAccountPasswordPolicyOutputWithContext(ctx context.Context) AccountPasswordPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountPasswordPolicyOutput)
}

func (i *AccountPasswordPolicy) ToAccountPasswordPolicyPtrOutput() AccountPasswordPolicyPtrOutput {
	return i.ToAccountPasswordPolicyPtrOutputWithContext(context.Background())
}

func (i *AccountPasswordPolicy) ToAccountPasswordPolicyPtrOutputWithContext(ctx context.Context) AccountPasswordPolicyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountPasswordPolicyPtrOutput)
}

type AccountPasswordPolicyPtrInput interface {
	pulumi.Input

	ToAccountPasswordPolicyPtrOutput() AccountPasswordPolicyPtrOutput
	ToAccountPasswordPolicyPtrOutputWithContext(ctx context.Context) AccountPasswordPolicyPtrOutput
}

type accountPasswordPolicyPtrType AccountPasswordPolicyArgs

func (*accountPasswordPolicyPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**AccountPasswordPolicy)(nil))
}

func (i *accountPasswordPolicyPtrType) ToAccountPasswordPolicyPtrOutput() AccountPasswordPolicyPtrOutput {
	return i.ToAccountPasswordPolicyPtrOutputWithContext(context.Background())
}

func (i *accountPasswordPolicyPtrType) ToAccountPasswordPolicyPtrOutputWithContext(ctx context.Context) AccountPasswordPolicyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountPasswordPolicyPtrOutput)
}

// AccountPasswordPolicyArrayInput is an input type that accepts AccountPasswordPolicyArray and AccountPasswordPolicyArrayOutput values.
// You can construct a concrete instance of `AccountPasswordPolicyArrayInput` via:
//
//          AccountPasswordPolicyArray{ AccountPasswordPolicyArgs{...} }
type AccountPasswordPolicyArrayInput interface {
	pulumi.Input

	ToAccountPasswordPolicyArrayOutput() AccountPasswordPolicyArrayOutput
	ToAccountPasswordPolicyArrayOutputWithContext(context.Context) AccountPasswordPolicyArrayOutput
}

type AccountPasswordPolicyArray []AccountPasswordPolicyInput

func (AccountPasswordPolicyArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*AccountPasswordPolicy)(nil)).Elem()
}

func (i AccountPasswordPolicyArray) ToAccountPasswordPolicyArrayOutput() AccountPasswordPolicyArrayOutput {
	return i.ToAccountPasswordPolicyArrayOutputWithContext(context.Background())
}

func (i AccountPasswordPolicyArray) ToAccountPasswordPolicyArrayOutputWithContext(ctx context.Context) AccountPasswordPolicyArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountPasswordPolicyArrayOutput)
}

// AccountPasswordPolicyMapInput is an input type that accepts AccountPasswordPolicyMap and AccountPasswordPolicyMapOutput values.
// You can construct a concrete instance of `AccountPasswordPolicyMapInput` via:
//
//          AccountPasswordPolicyMap{ "key": AccountPasswordPolicyArgs{...} }
type AccountPasswordPolicyMapInput interface {
	pulumi.Input

	ToAccountPasswordPolicyMapOutput() AccountPasswordPolicyMapOutput
	ToAccountPasswordPolicyMapOutputWithContext(context.Context) AccountPasswordPolicyMapOutput
}

type AccountPasswordPolicyMap map[string]AccountPasswordPolicyInput

func (AccountPasswordPolicyMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*AccountPasswordPolicy)(nil)).Elem()
}

func (i AccountPasswordPolicyMap) ToAccountPasswordPolicyMapOutput() AccountPasswordPolicyMapOutput {
	return i.ToAccountPasswordPolicyMapOutputWithContext(context.Background())
}

func (i AccountPasswordPolicyMap) ToAccountPasswordPolicyMapOutputWithContext(ctx context.Context) AccountPasswordPolicyMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AccountPasswordPolicyMapOutput)
}

type AccountPasswordPolicyOutput struct{ *pulumi.OutputState }

func (AccountPasswordPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AccountPasswordPolicy)(nil))
}

func (o AccountPasswordPolicyOutput) ToAccountPasswordPolicyOutput() AccountPasswordPolicyOutput {
	return o
}

func (o AccountPasswordPolicyOutput) ToAccountPasswordPolicyOutputWithContext(ctx context.Context) AccountPasswordPolicyOutput {
	return o
}

func (o AccountPasswordPolicyOutput) ToAccountPasswordPolicyPtrOutput() AccountPasswordPolicyPtrOutput {
	return o.ToAccountPasswordPolicyPtrOutputWithContext(context.Background())
}

func (o AccountPasswordPolicyOutput) ToAccountPasswordPolicyPtrOutputWithContext(ctx context.Context) AccountPasswordPolicyPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v AccountPasswordPolicy) *AccountPasswordPolicy {
		return &v
	}).(AccountPasswordPolicyPtrOutput)
}

type AccountPasswordPolicyPtrOutput struct{ *pulumi.OutputState }

func (AccountPasswordPolicyPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**AccountPasswordPolicy)(nil))
}

func (o AccountPasswordPolicyPtrOutput) ToAccountPasswordPolicyPtrOutput() AccountPasswordPolicyPtrOutput {
	return o
}

func (o AccountPasswordPolicyPtrOutput) ToAccountPasswordPolicyPtrOutputWithContext(ctx context.Context) AccountPasswordPolicyPtrOutput {
	return o
}

func (o AccountPasswordPolicyPtrOutput) Elem() AccountPasswordPolicyOutput {
	return o.ApplyT(func(v *AccountPasswordPolicy) AccountPasswordPolicy {
		if v != nil {
			return *v
		}
		var ret AccountPasswordPolicy
		return ret
	}).(AccountPasswordPolicyOutput)
}

type AccountPasswordPolicyArrayOutput struct{ *pulumi.OutputState }

func (AccountPasswordPolicyArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]AccountPasswordPolicy)(nil))
}

func (o AccountPasswordPolicyArrayOutput) ToAccountPasswordPolicyArrayOutput() AccountPasswordPolicyArrayOutput {
	return o
}

func (o AccountPasswordPolicyArrayOutput) ToAccountPasswordPolicyArrayOutputWithContext(ctx context.Context) AccountPasswordPolicyArrayOutput {
	return o
}

func (o AccountPasswordPolicyArrayOutput) Index(i pulumi.IntInput) AccountPasswordPolicyOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) AccountPasswordPolicy {
		return vs[0].([]AccountPasswordPolicy)[vs[1].(int)]
	}).(AccountPasswordPolicyOutput)
}

type AccountPasswordPolicyMapOutput struct{ *pulumi.OutputState }

func (AccountPasswordPolicyMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]AccountPasswordPolicy)(nil))
}

func (o AccountPasswordPolicyMapOutput) ToAccountPasswordPolicyMapOutput() AccountPasswordPolicyMapOutput {
	return o
}

func (o AccountPasswordPolicyMapOutput) ToAccountPasswordPolicyMapOutputWithContext(ctx context.Context) AccountPasswordPolicyMapOutput {
	return o
}

func (o AccountPasswordPolicyMapOutput) MapIndex(k pulumi.StringInput) AccountPasswordPolicyOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) AccountPasswordPolicy {
		return vs[0].(map[string]AccountPasswordPolicy)[vs[1].(string)]
	}).(AccountPasswordPolicyOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*AccountPasswordPolicyInput)(nil)).Elem(), &AccountPasswordPolicy{})
	pulumi.RegisterInputType(reflect.TypeOf((*AccountPasswordPolicyPtrInput)(nil)).Elem(), &AccountPasswordPolicy{})
	pulumi.RegisterInputType(reflect.TypeOf((*AccountPasswordPolicyArrayInput)(nil)).Elem(), AccountPasswordPolicyArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*AccountPasswordPolicyMapInput)(nil)).Elem(), AccountPasswordPolicyMap{})
	pulumi.RegisterOutputType(AccountPasswordPolicyOutput{})
	pulumi.RegisterOutputType(AccountPasswordPolicyPtrOutput{})
	pulumi.RegisterOutputType(AccountPasswordPolicyArrayOutput{})
	pulumi.RegisterOutputType(AccountPasswordPolicyMapOutput{})
}
