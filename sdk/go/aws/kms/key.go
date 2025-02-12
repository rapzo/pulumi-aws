// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package kms

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Provides a KMS single-Region customer master key (CMK).
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws/kms"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := kms.NewKey(ctx, "key", &kms.KeyArgs{
// 			DeletionWindowInDays: pulumi.Int(10),
// 			Description:          pulumi.String("KMS key 1"),
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
// KMS Keys can be imported using the `id`, e.g.
//
// ```sh
//  $ pulumi import aws:kms/key:Key a 1234abcd-12ab-34cd-56ef-1234567890ab
// ```
type Key struct {
	pulumi.CustomResourceState

	// The Amazon Resource Name (ARN) of the key.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
	BypassPolicyLockoutSafetyCheck pulumi.BoolPtrOutput `pulumi:"bypassPolicyLockoutSafetyCheck"`
	// Specifies whether the key contains a symmetric key or an asymmetric key pair and the encryption algorithms or signing algorithms that the key supports.
	// Valid values: `SYMMETRIC_DEFAULT`,  `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_NIST_P256`, `ECC_NIST_P384`, `ECC_NIST_P521`, or `ECC_SECG_P256K1`. Defaults to `SYMMETRIC_DEFAULT`. For help with choosing a key spec, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html).
	CustomerMasterKeySpec pulumi.StringPtrOutput `pulumi:"customerMasterKeySpec"`
	// Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
	DeletionWindowInDays pulumi.IntPtrOutput `pulumi:"deletionWindowInDays"`
	// The description of the key as viewed in AWS console.
	Description pulumi.StringOutput `pulumi:"description"`
	// Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) is enabled. Defaults to false.
	EnableKeyRotation pulumi.BoolPtrOutput `pulumi:"enableKeyRotation"`
	// Specifies whether the key is enabled. Defaults to true.
	IsEnabled pulumi.BoolPtrOutput `pulumi:"isEnabled"`
	// The globally unique identifier for the key.
	KeyId pulumi.StringOutput `pulumi:"keyId"`
	// Specifies the intended use of the key. Valid values: `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
	// Defaults to `ENCRYPT_DECRYPT`.
	KeyUsage pulumi.StringPtrOutput `pulumi:"keyUsage"`
	// A valid policy JSON document. Although this is a key policy, not an IAM policy, an `iam.getPolicyDocument`, in the form that designates a principal, can be used.
	Policy  pulumi.StringOutput    `pulumi:"policy"`
	Tags    pulumi.StringMapOutput `pulumi:"tags"`
	TagsAll pulumi.StringMapOutput `pulumi:"tagsAll"`
}

// NewKey registers a new resource with the given unique name, arguments, and options.
func NewKey(ctx *pulumi.Context,
	name string, args *KeyArgs, opts ...pulumi.ResourceOption) (*Key, error) {
	if args == nil {
		args = &KeyArgs{}
	}

	var resource Key
	err := ctx.RegisterResource("aws:kms/key:Key", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetKey gets an existing Key resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKey(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *KeyState, opts ...pulumi.ResourceOption) (*Key, error) {
	var resource Key
	err := ctx.ReadResource("aws:kms/key:Key", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Key resources.
type keyState struct {
	// The Amazon Resource Name (ARN) of the key.
	Arn *string `pulumi:"arn"`
	// Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
	BypassPolicyLockoutSafetyCheck *bool `pulumi:"bypassPolicyLockoutSafetyCheck"`
	// Specifies whether the key contains a symmetric key or an asymmetric key pair and the encryption algorithms or signing algorithms that the key supports.
	// Valid values: `SYMMETRIC_DEFAULT`,  `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_NIST_P256`, `ECC_NIST_P384`, `ECC_NIST_P521`, or `ECC_SECG_P256K1`. Defaults to `SYMMETRIC_DEFAULT`. For help with choosing a key spec, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html).
	CustomerMasterKeySpec *string `pulumi:"customerMasterKeySpec"`
	// Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
	DeletionWindowInDays *int `pulumi:"deletionWindowInDays"`
	// The description of the key as viewed in AWS console.
	Description *string `pulumi:"description"`
	// Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) is enabled. Defaults to false.
	EnableKeyRotation *bool `pulumi:"enableKeyRotation"`
	// Specifies whether the key is enabled. Defaults to true.
	IsEnabled *bool `pulumi:"isEnabled"`
	// The globally unique identifier for the key.
	KeyId *string `pulumi:"keyId"`
	// Specifies the intended use of the key. Valid values: `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
	// Defaults to `ENCRYPT_DECRYPT`.
	KeyUsage *string `pulumi:"keyUsage"`
	// A valid policy JSON document. Although this is a key policy, not an IAM policy, an `iam.getPolicyDocument`, in the form that designates a principal, can be used.
	Policy  *string           `pulumi:"policy"`
	Tags    map[string]string `pulumi:"tags"`
	TagsAll map[string]string `pulumi:"tagsAll"`
}

type KeyState struct {
	// The Amazon Resource Name (ARN) of the key.
	Arn pulumi.StringPtrInput
	// Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
	BypassPolicyLockoutSafetyCheck pulumi.BoolPtrInput
	// Specifies whether the key contains a symmetric key or an asymmetric key pair and the encryption algorithms or signing algorithms that the key supports.
	// Valid values: `SYMMETRIC_DEFAULT`,  `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_NIST_P256`, `ECC_NIST_P384`, `ECC_NIST_P521`, or `ECC_SECG_P256K1`. Defaults to `SYMMETRIC_DEFAULT`. For help with choosing a key spec, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html).
	CustomerMasterKeySpec pulumi.StringPtrInput
	// Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
	DeletionWindowInDays pulumi.IntPtrInput
	// The description of the key as viewed in AWS console.
	Description pulumi.StringPtrInput
	// Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) is enabled. Defaults to false.
	EnableKeyRotation pulumi.BoolPtrInput
	// Specifies whether the key is enabled. Defaults to true.
	IsEnabled pulumi.BoolPtrInput
	// The globally unique identifier for the key.
	KeyId pulumi.StringPtrInput
	// Specifies the intended use of the key. Valid values: `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
	// Defaults to `ENCRYPT_DECRYPT`.
	KeyUsage pulumi.StringPtrInput
	// A valid policy JSON document. Although this is a key policy, not an IAM policy, an `iam.getPolicyDocument`, in the form that designates a principal, can be used.
	Policy  pulumi.StringPtrInput
	Tags    pulumi.StringMapInput
	TagsAll pulumi.StringMapInput
}

func (KeyState) ElementType() reflect.Type {
	return reflect.TypeOf((*keyState)(nil)).Elem()
}

type keyArgs struct {
	// Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
	BypassPolicyLockoutSafetyCheck *bool `pulumi:"bypassPolicyLockoutSafetyCheck"`
	// Specifies whether the key contains a symmetric key or an asymmetric key pair and the encryption algorithms or signing algorithms that the key supports.
	// Valid values: `SYMMETRIC_DEFAULT`,  `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_NIST_P256`, `ECC_NIST_P384`, `ECC_NIST_P521`, or `ECC_SECG_P256K1`. Defaults to `SYMMETRIC_DEFAULT`. For help with choosing a key spec, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html).
	CustomerMasterKeySpec *string `pulumi:"customerMasterKeySpec"`
	// Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
	DeletionWindowInDays *int `pulumi:"deletionWindowInDays"`
	// The description of the key as viewed in AWS console.
	Description *string `pulumi:"description"`
	// Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) is enabled. Defaults to false.
	EnableKeyRotation *bool `pulumi:"enableKeyRotation"`
	// Specifies whether the key is enabled. Defaults to true.
	IsEnabled *bool `pulumi:"isEnabled"`
	// Specifies the intended use of the key. Valid values: `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
	// Defaults to `ENCRYPT_DECRYPT`.
	KeyUsage *string `pulumi:"keyUsage"`
	// A valid policy JSON document. Although this is a key policy, not an IAM policy, an `iam.getPolicyDocument`, in the form that designates a principal, can be used.
	Policy *string           `pulumi:"policy"`
	Tags   map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Key resource.
type KeyArgs struct {
	// Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`.
	BypassPolicyLockoutSafetyCheck pulumi.BoolPtrInput
	// Specifies whether the key contains a symmetric key or an asymmetric key pair and the encryption algorithms or signing algorithms that the key supports.
	// Valid values: `SYMMETRIC_DEFAULT`,  `RSA_2048`, `RSA_3072`, `RSA_4096`, `ECC_NIST_P256`, `ECC_NIST_P384`, `ECC_NIST_P521`, or `ECC_SECG_P256K1`. Defaults to `SYMMETRIC_DEFAULT`. For help with choosing a key spec, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html).
	CustomerMasterKeySpec pulumi.StringPtrInput
	// Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
	DeletionWindowInDays pulumi.IntPtrInput
	// The description of the key as viewed in AWS console.
	Description pulumi.StringPtrInput
	// Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) is enabled. Defaults to false.
	EnableKeyRotation pulumi.BoolPtrInput
	// Specifies whether the key is enabled. Defaults to true.
	IsEnabled pulumi.BoolPtrInput
	// Specifies the intended use of the key. Valid values: `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
	// Defaults to `ENCRYPT_DECRYPT`.
	KeyUsage pulumi.StringPtrInput
	// A valid policy JSON document. Although this is a key policy, not an IAM policy, an `iam.getPolicyDocument`, in the form that designates a principal, can be used.
	Policy pulumi.StringPtrInput
	Tags   pulumi.StringMapInput
}

func (KeyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*keyArgs)(nil)).Elem()
}

type KeyInput interface {
	pulumi.Input

	ToKeyOutput() KeyOutput
	ToKeyOutputWithContext(ctx context.Context) KeyOutput
}

func (*Key) ElementType() reflect.Type {
	return reflect.TypeOf((*Key)(nil))
}

func (i *Key) ToKeyOutput() KeyOutput {
	return i.ToKeyOutputWithContext(context.Background())
}

func (i *Key) ToKeyOutputWithContext(ctx context.Context) KeyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KeyOutput)
}

func (i *Key) ToKeyPtrOutput() KeyPtrOutput {
	return i.ToKeyPtrOutputWithContext(context.Background())
}

func (i *Key) ToKeyPtrOutputWithContext(ctx context.Context) KeyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KeyPtrOutput)
}

type KeyPtrInput interface {
	pulumi.Input

	ToKeyPtrOutput() KeyPtrOutput
	ToKeyPtrOutputWithContext(ctx context.Context) KeyPtrOutput
}

type keyPtrType KeyArgs

func (*keyPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**Key)(nil))
}

func (i *keyPtrType) ToKeyPtrOutput() KeyPtrOutput {
	return i.ToKeyPtrOutputWithContext(context.Background())
}

func (i *keyPtrType) ToKeyPtrOutputWithContext(ctx context.Context) KeyPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KeyPtrOutput)
}

// KeyArrayInput is an input type that accepts KeyArray and KeyArrayOutput values.
// You can construct a concrete instance of `KeyArrayInput` via:
//
//          KeyArray{ KeyArgs{...} }
type KeyArrayInput interface {
	pulumi.Input

	ToKeyArrayOutput() KeyArrayOutput
	ToKeyArrayOutputWithContext(context.Context) KeyArrayOutput
}

type KeyArray []KeyInput

func (KeyArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Key)(nil)).Elem()
}

func (i KeyArray) ToKeyArrayOutput() KeyArrayOutput {
	return i.ToKeyArrayOutputWithContext(context.Background())
}

func (i KeyArray) ToKeyArrayOutputWithContext(ctx context.Context) KeyArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KeyArrayOutput)
}

// KeyMapInput is an input type that accepts KeyMap and KeyMapOutput values.
// You can construct a concrete instance of `KeyMapInput` via:
//
//          KeyMap{ "key": KeyArgs{...} }
type KeyMapInput interface {
	pulumi.Input

	ToKeyMapOutput() KeyMapOutput
	ToKeyMapOutputWithContext(context.Context) KeyMapOutput
}

type KeyMap map[string]KeyInput

func (KeyMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Key)(nil)).Elem()
}

func (i KeyMap) ToKeyMapOutput() KeyMapOutput {
	return i.ToKeyMapOutputWithContext(context.Background())
}

func (i KeyMap) ToKeyMapOutputWithContext(ctx context.Context) KeyMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KeyMapOutput)
}

type KeyOutput struct{ *pulumi.OutputState }

func (KeyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Key)(nil))
}

func (o KeyOutput) ToKeyOutput() KeyOutput {
	return o
}

func (o KeyOutput) ToKeyOutputWithContext(ctx context.Context) KeyOutput {
	return o
}

func (o KeyOutput) ToKeyPtrOutput() KeyPtrOutput {
	return o.ToKeyPtrOutputWithContext(context.Background())
}

func (o KeyOutput) ToKeyPtrOutputWithContext(ctx context.Context) KeyPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v Key) *Key {
		return &v
	}).(KeyPtrOutput)
}

type KeyPtrOutput struct{ *pulumi.OutputState }

func (KeyPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Key)(nil))
}

func (o KeyPtrOutput) ToKeyPtrOutput() KeyPtrOutput {
	return o
}

func (o KeyPtrOutput) ToKeyPtrOutputWithContext(ctx context.Context) KeyPtrOutput {
	return o
}

func (o KeyPtrOutput) Elem() KeyOutput {
	return o.ApplyT(func(v *Key) Key {
		if v != nil {
			return *v
		}
		var ret Key
		return ret
	}).(KeyOutput)
}

type KeyArrayOutput struct{ *pulumi.OutputState }

func (KeyArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Key)(nil))
}

func (o KeyArrayOutput) ToKeyArrayOutput() KeyArrayOutput {
	return o
}

func (o KeyArrayOutput) ToKeyArrayOutputWithContext(ctx context.Context) KeyArrayOutput {
	return o
}

func (o KeyArrayOutput) Index(i pulumi.IntInput) KeyOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) Key {
		return vs[0].([]Key)[vs[1].(int)]
	}).(KeyOutput)
}

type KeyMapOutput struct{ *pulumi.OutputState }

func (KeyMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]Key)(nil))
}

func (o KeyMapOutput) ToKeyMapOutput() KeyMapOutput {
	return o
}

func (o KeyMapOutput) ToKeyMapOutputWithContext(ctx context.Context) KeyMapOutput {
	return o
}

func (o KeyMapOutput) MapIndex(k pulumi.StringInput) KeyOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) Key {
		return vs[0].(map[string]Key)[vs[1].(string)]
	}).(KeyOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*KeyInput)(nil)).Elem(), &Key{})
	pulumi.RegisterInputType(reflect.TypeOf((*KeyPtrInput)(nil)).Elem(), &Key{})
	pulumi.RegisterInputType(reflect.TypeOf((*KeyArrayInput)(nil)).Elem(), KeyArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*KeyMapInput)(nil)).Elem(), KeyMap{})
	pulumi.RegisterOutputType(KeyOutput{})
	pulumi.RegisterOutputType(KeyPtrOutput{})
	pulumi.RegisterOutputType(KeyArrayOutput{})
	pulumi.RegisterOutputType(KeyMapOutput{})
}
